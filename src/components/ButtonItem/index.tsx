import {TodoListContext} from '../../ContextApi/TodoListContext';
import * as S from './ButtonItem.styles';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useContext, useState} from 'react';
import {supabase} from '../../database';

const ButtonItem = () => {
	const {todo, setShouldReload} = useContext(TodoListContext);

	const insertData = async () => {
		setShouldReload(false);
		try {
			if (newNota === '') {
				toast.warning('Insira uma nota');
				return;
			}
			const todoHidden = todo.filter((item) => item.name === newNota);

			if (todoHidden.length) {
				toast.warning('Nota já adicionada');
				return;
			}

			const response = await supabase
				.from('todo')
				.insert({name: newNota, checked: false});

			if (response.error !== null) {
				toast.error('Erro ao adicionar nota');

				return;
			}
			toast.success('Nota adicionada');
			setShouldReload(true);

			setNewNota('');
		} catch (error) {
			console.log(error);
		}

		return;
	};

	const [newNota, setNewNota] = useState('');
	return (
		<S.ButtonItem>
			<input
				placeholder='Nova nota'
				value={newNota}
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						insertData();
					}
				}}
				onChange={(e) => setNewNota(e.target.value)}
			/>
			<button onClick={insertData}>Salvar</button>
		</S.ButtonItem>
	);
};

export {ButtonItem};
