import * as S from './HeaderProfile.styles';

const HeaderProfile = () => {
	return (
		<S.HeaderProfile>
			<S.HeaderInfo>
				<h3>To do list</h3>
				<span>Vamos parar de procrastinar?</span>
			</S.HeaderInfo>

			<S.HeaderImg src='https://github.com/diego-af.png' />
		</S.HeaderProfile>
	);
};

export {HeaderProfile};
