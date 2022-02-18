import {useState} from 'react'
import { useGlobalContext } from './../context/tableContext';
import MyLoader from './Loading';

const Table = () => {
  const [selectValue, setSelectValue] = useState("")
  const [newTable, setNewTable] = useState([])
  const [column, setColumn] = useState('')
  const [row, setRow] = useState('')

  const { table,isLoading } = useGlobalContext()
 
  const changeSelectHandler = (e) => {
    setSelectValue(e.target.value)
  }

  const startHandler = () => {
    const fieldNumber = new Array(table[selectValue].field).fill(1)
    setNewTable(fieldNumber)
  }
 
  const onMouseEnterHandler = ( e, val) => {
     e.target.style.backgroundColor = 'rgb(30, 144, 255)';
    e.stopPropagation() 
    setColumn(val)
  }

  const onMouseLeaveHandler = (e) => {
     e.target.style.backgroundColor = '';
    e.stopPropagation()
  }

  const onMouseEnterRowHandler = (val) => {
    setRow(val)
  }
  if (isLoading) {
    return <MyLoader />
  }
  return (
    <main>
      <div>
          <section className="selectContainer">
          <div>
            <select value={selectValue} onChange={changeSelectHandler} >
              <option value="pickMode" >Pick mode</option>
              <option value="easyMode">EasyMode</option>
              <option value="normalMode">NormalMode</option>
              <option value="hardMode">HardMode</option>
            </select>
          </div>
          <button className="btn" onClick={startHandler}>Start</button>
        </section>
        <table>
        <tbody>
            {newTable && newTable.map((item, index) => <tr key={index}
             onMouseEnter={() => onMouseEnterRowHandler(index)}
            >
      
            {newTable && newTable.map((item, index) => <td key={index}
              onMouseEnter={(e) =>onMouseEnterHandler(e,index)}
              onClick = {onMouseLeaveHandler}
            ></td>)}
            </tr>)}
          </tbody>
         </table>
       </div>
    
      <section className='hoverContainer'>
        <h2>Hover squares</h2>
        <div>
          {<p>Row:{ row }</p>}
         {<p>Column:{ column }</p>}
        </div>
      </section>
  
    </main>
  )
}

export default Table