import style from './Checkbox.module.css'

const Checkbox =() => {
    return(
        <div>
            <input className={style.checkbox} type='checkbox'/>checkbox
        </div>
    )
}

export default Checkbox;