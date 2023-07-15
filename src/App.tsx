import {useEffect, useState} from 'react';
import * as S from './App.styles';
import {TodoListProvider} from './ContextApi/TodoListContext';
import {ButtonHidden} from './components/ButtonHidden';
import {ButtonItem} from './components/ButtonItem';
import {HeaderProfile} from './components/HeaderProfile';
import {TodoList} from './components/TodoLIst';
import {ToastContainer} from 'react-toastify';

function App() {
	const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

	useEffect(() => {
		const handleResize = () => {
			setViewportHeight(window.innerHeight);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<TodoListProvider>
			<S.Container viewportHeight={viewportHeight}>
				<HeaderProfile />
				<ButtonHidden />
				<TodoList />
				<ButtonItem />
			</S.Container>
			<ToastContainer />
		</TodoListProvider>
	);
}

export default App;
