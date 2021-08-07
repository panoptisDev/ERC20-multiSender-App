import React, { useState } from 'react';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript';

import './App.css';

function App() {
    
    const [arr, setArr] = useState([]);
    const [erc20, setErc20] = useState('0x0000000000000000000000000000000000000000');

    function getContent(e) {
        const maxLines = e.doc.lineCount();
        setArr([]);

        for(let i=0; i<maxLines; i++) {
            let line = e.doc.getLine(i);
            let [addr, amount] = line.split(',');
            setArr(oldArr => [...oldArr, {address: String(addr), amount: amount}]);
        }
    }

    return ( 
    <div className="App">

        <header className="App-header">
            <h1>Multi sender App</h1>
            <p>
                Send any ERC20 token to multiple users now
            </p>

            <p>ERC20 TOKEN ADDRESS TO SEND </p>
            <input 
            onChange={ e => setErc20(e.target.value) }
            value={erc20} 
            type='text' 
            name="ERC20" 
            size='50' 
            />
            <br/>
            
            <p style={{marginTop: '20px'}}>Add Recipients Addresses and amount of money to send</p>
            <div style={{width: '50%', height: '200px'}}>
                <CodeMirror
                      value= '0x6308F1c6f283583C8bf8E31Da793B87718b051eD, 10'
                      onChange= {(e) => {getContent(e)}}
                      style={{width:'50% !important'}}
                      options={{
                        theme: 'monokai',
                        keyMap: 'sublime',
                        lineNumbers: true,
                        mode: 'javascript',
                      }}
                />
            </div>
        </header>

    </div>
    );
}

export default App;
