import * as S from './ButtonHidden.styles';

import {useContext} from 'react';
import {TodoListContext} from '../../ContextApi/TodoListContext';

const ButtonHidden = () => {
	const {todo, setTodo} = useContext(TodoListContext);

	const handleHidden = () => {
		const todoHidden = todo.filter((item) => item.checked === true);

		if (!todoHidden.length) {
			return;
		}
		setTodo(todoHidden);
	};

	const handleHiddenDone = () => {
		const todoHidden = todo.filter((item) => item.checked === false);
		if (!todoHidden.length) {
			return;
		}
		setTodo(todoHidden);
	};

	return (
		<S.ButtonHiddenContent>
			<S.ButtonHidden onClick={handleHidden} disabled={true}>
				<span>itens concluidos</span>
			</S.ButtonHidden>
			<S.ButtonHidden onClick={handleHiddenDone} disabled={true}>
				<span>Itens não concluidos</span>
			</S.ButtonHidden>
		</S.ButtonHiddenContent>
	);
};

export {ButtonHidden};
