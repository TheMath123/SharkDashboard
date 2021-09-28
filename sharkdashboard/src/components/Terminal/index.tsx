import { useState, useRef, ChangeEvent, useEffect } from 'react';
import styles from './terminal.module.scss';

export default function Terminal() {
  const terminalRef = useRef<HTMLTextAreaElement>(null)
  const [textTerminal, setTextTerminal] = useState('')

  useEffect(() => { //Star application
    setTextTerminal(`SharkShell\nCopyright (C) Greens Group. All rights reserved.\n`)
  },[])

  useEffect(() => { textTerminal },[textTerminal])

  useEffect(() => { //Key Press Detect use shortcut
    window.addEventListener('keypress',handleShortcut)
  }, [textTerminal])

  function handleShortcut(e: KeyboardEvent){ // Shortcut

    if(e.shiftKey && e.key === 'C'){// Call function clean terminal
      e.preventDefault()
      cleanTerminal()
    }

    if(e.key === 'Enter'){ // Under line / execute command
      let parts = textTerminal.split('\n')
      
      executeCommand(parts[parts.length-1])
    }

  }

  function cleanTerminal(){ 
    setTextTerminal(``)
  }

  function executeCommand(command: string){
    if(command.startsWith('/')){
      if(command.slice(1, command.length) === 'teste'){
        setTextTerminal(textTerminal + '\nVocê é um vacilão!')
      }
    }else{
      setTextTerminal(textTerminal + '\nCommand invalid')
    }
  }

  function updateTerminal(e: ChangeEvent<HTMLTextAreaElement>){
    setTextTerminal(e.currentTarget.value)
  }

  return(
    <div className={styles.containerTerminal}>
      <div className={styles.sideLeft}>
        <textarea 
          className={styles.textShell}
          value={textTerminal}
          wrap="hard"
          onChange={updateTerminal}
          ref={terminalRef}
          spellCheck={false}
        ></textarea>
      </div>
      <div className={styles.sideRight}>
        <div className={styles.boxCommands}>
          <div className={styles.buttonCommand}>
            <span>Command</span>
          </div>
        </div>
      </div>
    </div>
  )
}
