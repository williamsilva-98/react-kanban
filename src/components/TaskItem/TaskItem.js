import React, { useState } from "react";
import PropTypes from 'prop-types'
import './taskitem.css'

export default function TaskItem({ id, title, status, onUpdateTask, onDeleteTask }) {

	const [isEditing, setIsEditing] = useState(false)
	const [mutableTitle, setMutableTitle] = useState(title)

	const toEdition = () => setIsEditing(true)

	const changeTitle = (e) => {
		const newTitle = e.target.value
		setMutableTitle(newTitle)
		onUpdateTask(id, newTitle, status)
	}

	const onKeyPress = (e) => {
		if (e.charCode === 13) {
			setIsEditing(false)

			if (mutableTitle.length === 0) {
				onDeleteTask(id)
			}
		}
	}

	const onChangeState = (e) => {
		onUpdateTask(id, title, e.target.value)
	}

	if (isEditing) {
		return (
			<div className="task-item" >
				<input type="text" value={mutableTitle} onChange={(e) => changeTitle(e)} onKeyPress={onKeyPress} />
			</div>
		)
	} else {
		return (
			<div className="task-item">
				<div key={id} onClick={toEdition}>{mutableTitle}</div>
				<select onChange={onChangeState} value={status}>
					<option value="Pendente">Pendente</option>
					<option value="Fazendo">Fazendo</option>
					<option value="Feito">Feito</option>
				</select>
			</div>
		)
	}

}

TaskItem.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired
}
