import Header from './header/Header';
import './home.css';
import Layout from './layout/Layout';
import DummyComponent from './dummyComponent/DummyComponent';
import Landing from './landing/Landing';
import Footer from './footer/Footer'
import Row0 from './row0/Row0';

function Home() {
	return (
		<div>
			<Layout 
				header={<Header />}  
				landing={<Landing />}
				row0={<Row0 />}
				row1={<DummyComponent />}
				row2={<DummyComponent />}
				row3={<DummyComponent />}
				footer={<Footer />}
			/>
		</div>
	);
}

export default Home;
