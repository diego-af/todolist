import {useContext, useEffect} from 'react';
import * as S from './TodoList.styles';
import {TodoListContext} from '../../ContextApi/TodoListContext';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaTrash} from 'react-icons/fa';
import {supabase} from '../../database';
import {TodoListProps} from '../../utils/types';

const TodoList = () => {
	const {todo, setTodo, setShouldReload, shouldReload} =
		useContext(TodoListContext);

	const handleChecked = (name: string | undefined) => {
		const checkedTodo = todo.map((item) => {
			if (item.name === name) {
				return {...item, checked: !item.checked};
			}
			return item;
		});

		setTodo([...checkedTodo]);
	};

	const handleDelete = async (id: number | undefined) => {
		setShouldReload(false);
		try {
			const {error} = await supabase.from('todo').delete().eq('id', id);

			if (error === null) {
				toast.success('Nota removida');
				setShouldReload(true);
				return;
			}

			toast.error('Erro ao remover nota');
		} catch (error) {
			console.log(error);
		}
	};

	const updateChecked = async (item: TodoListProps) => {
		setShouldReload(false);
		try {
			const {error} = await supabase
				.from('todo')
				.update({checked: !item.checked})
				.eq('id', item?.id);

			if (error === null) {
				toast.success('Nota atualizada');
				setShouldReload(true);
				return;
			}

			toast.error('Erro ao atualizar nota');
		} catch (error) {
			console.log(error);
		}
	};
	const getData = async () => {
		try {
			const {data} = await supabase.from('todo').select('*');
			if (data?.length) {
				setTodo(data);
				return;
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		if (shouldReload) {
			getData();
		}
	}, [shouldReload]);

	if (!todo.length) {
		return (
			<S.TodoListContent>
				<S.TodoListNameTask>Não há tarefas</S.TodoListNameTask>
			</S.TodoListContent>
		);
	}

	return (
		<S.TodoListContent>
			{todo.map((item) => (
				<S.TodoListItem key={item.name} isChecked={item.checked}>
					<S.TodoListContentItem>
						<S.TodoListitemCheck
							type='checkbox'
							checked={item.checked}
							onChange={() => handleChecked(item?.name)}
							onClick={() => updateChecked(item)}
						/>
						<S.TodoListNameTask>{item.name}</S.TodoListNameTask>
					</S.TodoListContentItem>
					<FaTrash
						color='red'
						size={16}
						onClick={() => handleDelete(item?.id)}
					/>
				</S.TodoListItem>
			))}
		</S.TodoListContent>
	);
};

export {TodoList};
