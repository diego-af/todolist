import {createContext, useState} from 'react';
import {TodoListProps, TodoListPropsContext} from '../utils/types';

export const TodoListContext = createContext({} as TodoListPropsContext);

export const TodoListProvider = ({children}: {children: React.ReactNode}) => {
	const [todo, setTodo] = useState<TodoListProps[]>([]);
	const [shouldReload, setShouldReload] = useState(true);

	return (
		<TodoListContext.Provider
			value={{todo, setTodo, shouldReload, setShouldReload}}
		>
			{children}
		</TodoListContext.Provider>
	);
};
