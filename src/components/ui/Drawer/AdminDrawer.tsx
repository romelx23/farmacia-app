import { Box, Button, CssBaseline, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import React, { FC } from "react";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from "react-router-dom";

const listItem = [
  {
    id: '1',
    text: 'Inicio',
    icon: <HomeOutlinedIcon />,
    path: '/administracion/inicio'
  },
  {
    id: '2',
    text: 'Reportes de Inventario',
    icon: <Inventory2OutlinedIcon />,
    path: '/administracion/inventario'
  },
  {
    id: '3',
    text: 'Reportes de Ventas',
    icon: <SellOutlinedIcon />,
    path: '/administracion/reporte-ventas'
  },
  {
    id: '4',
    text: 'Medicamentos agotandose',
    icon: <ProductionQuantityLimitsOutlinedIcon />,
    path: '/administracion/medicamentos-agotandose'
  },
  {
    id: '5',
    text: 'Registro de Pedido',
    icon: <EventNoteOutlinedIcon />,
    path: '/administracion/registro-pedidos'
  },
  {
    id: '6',
    text: 'Medicamentos Vendidos',
    icon: <HomeOutlinedIcon />,
    path: '/administracion/medicamentos-vendidos'
  },
]

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

interface Props {
    children: React.ReactNode;
}

export const AdminDrawer: FC<Props> = ({children}) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div className="bg-gray-800 w-full h-full">
       <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleOpen}
                    edge="start"
                    sx={{
                    marginRight: 1,
                    ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <div className="flex h-14 py-2 px-2 justify-between w-full items-center text-white">
                    <Link 
                        to="/"
                    >
                        <h1 className="font-bold text-xl font-mochi">Tú Farmacia</h1>
                    </Link>
                    <div className="flex gap-2">
                        <Link to={"/administracion"}>
                        <h1>Administración</h1>
                        </Link>
                        <Link
                            to={"/registrate"}
                            className=""
                            >
                            <h1>Crea una cuenta</h1>
                        </Link>
                    </div>
                </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {listItem.map(({id, text, icon, path}) => (
                    <ListItem key={id} disablePadding sx={{ display: 'block' }}>
                        <Link to={path}>
                          <ListItemButton>
                                <ListItemIcon sx={{minWidth: 35}}>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText className="flex" primary={text} sx={{ opacity: open ? 1 : 0, display: 'inline' }}  />
                          </ListItemButton>
                        </Link>
                    </ListItem>
                    ))} 
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100%' }}>
                {/* <DrawerHeader /> */}
                <div className="h-12" />
                {children}
            </Box>
        </Box>
    </div>
  );
};

{/* <Button onClick={() => handleOpen()} className="bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </Button> */}
    //   <Drawer
    //     anchor={"left"}
    //     open={open}
    //     onClose={() => handleClose()}
    //     style={{ padding: "5px", height: "100%" }}
    //     variant="persistent"
        
    //   >
    //     <Box
    //       sx={{ width: 250 }}
    //       display='flex'
    //       flexDirection='column'
    //       justifyContent='space-between'
    //       role="presentation"
    //       height='100%'
    //       // onClick={toggleDrawer(anchor, false)}
    //       // onKeyDown={toggleDrawer(anchor, false)}
    //     >
    //       <List>
    //         {listItem.map(({id, text, icon} , index) => (
    //           <ListItem key={id} disablePadding>
    //             <ListItemButton>
    //               <ListItemIcon>
    //                 {icon}
    //               </ListItemIcon>
    //               <ListItemText primary={text} />
    //             </ListItemButton>
    //           </ListItem>
    //         ))} 
    //       </List>
    //       {/* <Divider /> */}
    //       <Button onClick={() => setOpen(!open)} className="bg-white">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //           strokeWidth={2}
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M4 6h16M4 12h16M4 18h7"
    //           />
    //         </svg>
    //       </Button>
    //     </Box>
    //   </Drawer>