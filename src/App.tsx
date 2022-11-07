import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import logo from './img/stackline-logo.jpg'
import ProductLayout from './ProductLayout';
import ProductDataProvider from './state-mangement-store/ProductDataProvider';

const App = () => {  
  return (
    <Typography className="App">
      <AppBar position="static">
        <Toolbar variant="regular" style={{backgroundColor: "#0203089e"}}>
          <img src={logo} style={{height: '50px', width: '50px'}} />
        </Toolbar>
      </AppBar>
      <ProductDataProvider>
        <ProductLayout />
      </ProductDataProvider>
    </Typography>
  );
}

export default App;