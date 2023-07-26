'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { CloudIcon, EmojiIcon, LockIcon, PictureIcon, SendIcon, SpeechIcon } from './Icons'
import { FillColor } from '@/type/Chat'
import '@/style/chat/ChatInput.css'

export function ChatInput() {
  const inputIcon = ['emojy', 'picture', 'lock', 'cloud', 'speech']
  const { theme } = useTheme()
  const [inputData, setInputData] = useState('')
  const [themeColor, setThemeColor] = useState('')
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      // console.log(inputData)
    }
  }
  const handleSend = () => {
    // console.log(inputData)
  }
  const handleFillColor = (): FillColor => theme === 'dark' ? FillColor.White : FillColor.Black

  useEffect(() => {
    setThemeColor(theme === 'dark' ? FillColor.White : FillColor.Black)
  }, [])

  return <div className='p-4  w-full  h-[130px] '>
    <div className='chat-input h-full rounded-xl flex justify-between flex-col p-2'>
      <input
        className="w-full mx-4 h-full bg-transparent outline-none"
        onKeyDown={handleKeyDown}
        onChange={(e) => { setInputData(e.target.value) }}
        type="text"
      />
      <div className=' border-b m-2 division-line' />
      <div className="h-full mx-3 flex items-center justify-between">
        <div className="h-full  flex items-center gap-4">
          {themeColor && <>
            <EmojiIcon fill={handleFillColor()}></EmojiIcon>
            <LockIcon fill={handleFillColor()}></LockIcon>
            <PictureIcon fill={handleFillColor()}></PictureIcon>
            <SpeechIcon fill={handleFillColor()}></SpeechIcon>
            <CloudIcon fill={handleFillColor()}></CloudIcon>
          </>}

        </div>
        <div className='cursor-pointer'>
          {themeColor && <SendIcon fill={handleFillColor()} />}
        </div>
      </div>
    </div>
  </div>
}
