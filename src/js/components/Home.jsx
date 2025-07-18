
import { Todos } from "./Todos";

//create your first component
const Home = () => {

	

	return (
		<>
			<h1 className="d-flex justify-content-center align-items-center">Tu futuro empieza con el propósito del presente.</h1>
			<Todos ></Todos>
		</>
	);
};
export default Home;