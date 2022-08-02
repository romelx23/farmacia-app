
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getInventaryProducts } from '../../store/slices';
import moment from 'moment';
import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false
    },
    title: {
      display: true,
      text: 'Grafica de Productos Expirados y no Expirados',
    },
  },
};

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false
    },
    title: {
      display: true,
      text: 'Grafica de Productos con bajo y normal Stock',
    },
  },
};

const labels = ['Expirados', 'No Expirados'];
const labels2 = ['Normal Stock', 'Poco Stock'];


export const HomeAdminPage = () => {
    const { products } = useAppSelector( state => state.admin );

    const expiredProducts = products.filter(product => {
        if (moment(product.expirationDate).format() < moment().format()) {
            return product;
        }
    })

    const noExpiredProducts = products.filter(product => {
        if (moment(product.expirationDate).format() >= moment().format()) {
            return product;
        }
    })

    const ProductsWithALotStock = products.filter(product => {
        if (product.stock > 10) {
            return product;
        }
    })

    const ProductsWithALittleStock = products.filter(product => {
      if (product.stock <= 10) {
            return product;
        }
    })

    const quantityExpiredProducts = expiredProducts.length
    const quantityNoExpiredProducts = noExpiredProducts.length
    const quantityProductsWithALotStock = ProductsWithALotStock.length
    const quantityProductsWithALittleStock = ProductsWithALittleStock.length
    
    const data = {
      labels,
      datasets: [
        {
          label: 'Medicamentos',
          data: [quantityExpiredProducts, quantityNoExpiredProducts],
          backgroundColor: ['rgba(255, 99, 133, 0.89)', 'rgba(54, 163, 235, 0.877)'],
        },
      ],
    };

    const data2 = {
      labels: labels2,
      datasets: [
        {
          label: 'Medicamentos',
          data: [quantityProductsWithALotStock, quantityProductsWithALittleStock],
          backgroundColor: ['rgba(54, 163, 235, 0.877)', 'rgba(255, 99, 133, 0.89)'],
          borderColor: [
            'rgb(54, 163, 235)',
            'rgb(255, 99, 133)',
          ],
          borderWidth: 1,
          
        },
      ],
    };

    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(getInventaryProducts());
    }, [])

  return (
    <div>
      <h1 className='text-center text-xl font-semibold'>Indicadores de la Farmacia</h1>
      <div className="grid grid-cols-2 mt-7 h-64">
        <div className="grid-cols-1">
          <Bar options={options} data={data} />
        </div>
        <div className="grid-cols-1 w-full flex justify-center">
          {/* <Bar options={options2} data={data2} /> */}
          <div className="w-full max-w-sm">
            <Pie data={data2} />
          </div>
        </div>
      </div>
    </div>
  )
}
