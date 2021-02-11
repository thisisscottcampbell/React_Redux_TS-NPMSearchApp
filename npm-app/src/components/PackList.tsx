import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';

const PackList: React.FC = () => {
	const [term, setTerm] = useState('');
	const { searchPacks } = useActions();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		searchPacks(term);
	};
	return (
		<div>
			<form>
				<input value={term} onChange={(e) => setTerm(e.target.value)} />
				<button>Search</button>
			</form>
		</div>
	);
};

export default PackList;
