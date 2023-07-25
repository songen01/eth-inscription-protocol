import type { FillColor } from '@/type/Chat'

export function SendIcon({ fill }: { fill: FillColor }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.1378 10.5689L9.60498 7.30246C8.40816 6.70405 7 7.57434 7 8.91243V15.0875C7 16.4256 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8414 17.3171 11.1585 16.1378 10.5689Z" fill={fill} />
  </svg>
}

export function SpeechIcon({ fill }: { fill: FillColor }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="2" width="8" height="13" rx="4" fill={fill} />
    <path d="M5 11C5 12.8565 5.7375 14.637 7.05025 15.9497C8.36301 17.2625 10.1435 18 12 18C13.8565 18 15.637 17.2625 16.9497 15.9497C18.2625 14.637 19 12.8565 19 11" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 21V19" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
}

export function CloudIcon({ fill }: { fill: FillColor }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 19.9909C9 19.9856 8.99549 19.9814 8.9902 19.9818C8.82838 19.9939 8.66491 20 8.5 20C4.91015 20 2 17.0899 2 13.5C2 9.91015 4.91015 7 8.5 7C11.1608 7 13.4482 8.59879 14.4539 10.8881C14.7306 11.518 15.312 12 16 12C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20H9.00911C9.00408 20 9 19.9959 9 19.9909Z" fill={fill} />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4606 11.7249C20.9474 11.1415 22 9.69369 22 8C22 5.79086 20.2091 4 18 4C15.8913 4 14.1638 5.63165 14.011 7.70128C14.776 8.42868 15.3971 9.30566 15.8272 10.2848C15.8695 10.381 15.9279 10.4467 15.9721 10.4798C15.989 10.4924 15.9999 10.4979 16.0054 10.5C17.3146 10.5013 18.5168 10.96 19.4606 11.7249ZM16.0094 10.5012C16.0094 10.5013 16.0085 10.5011 16.0066 10.5005C16.0084 10.5007 16.0094 10.5011 16.0094 10.5012Z" fill={fill} />
  </svg>
}
export function EmojiIcon({ fill }: { fill: FillColor }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={fill} stroke-width="2" stroke-linecap="round" />
    <path d="M7.88124 15.7559C8.37391 16.1826 9.02309 16.4909 9.72265 16.6928C10.4301 16.897 11.2142 17 12 17C12.7858 17 13.5699 16.897 14.2774 16.6928C14.9769 16.4909 15.6261 16.1826 16.1188 15.7559" stroke={fill} stroke-width="2" stroke-linecap="round" />
    <circle cx="9" cy="10" r="1.25" fill={fill} stroke="white" stroke-width="0.5" stroke-linecap="round" />
    <circle cx="15" cy="10" r="1.25" fill={fill} stroke="white" stroke-width="0.5" stroke-linecap="round" />
  </svg>
}
export function PictureIcon({ fill }: { fill: FillColor }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.17157 3.17163C2 4.3432 2 6.22882 2 10.0001V14.0001C2 17.7713 2 19.6569 3.17157 20.8285C4.34315 22.0001 6.22876 22.0001 10 22.0001H14C17.7712 22.0001 19.6569 22.0001 20.8284 20.8285C22 19.6569 22 17.7713 22 14.0001V14.0001V10.0001C22 7.16071 22 5.39023 21.5 4.18862V17.0001C20.5396 17.0001 19.6185 16.6185 18.9393 15.9394L18.1877 15.1877C17.4664 14.4664 17.1057 14.1058 16.6968 13.9538C16.2473 13.7867 15.7527 13.7867 15.3032 13.9538C14.8943 14.1058 14.5336 14.4664 13.8123 15.1877L13.6992 15.3009C13.1138 15.8862 12.8212 16.1789 12.5102 16.2335C12.2685 16.2759 12.0197 16.228 11.811 16.0988C11.5425 15.9327 11.3795 15.5522 11.0534 14.7913L11 14.6667C10.2504 12.9176 9.87554 12.043 9.22167 11.7152C8.89249 11.5502 8.52413 11.4792 8.1572 11.5102C7.42836 11.5717 6.75554 12.2445 5.40989 13.5902L3.5 15.5001V2.88745C3.3844 2.97355 3.27519 3.06801 3.17157 3.17163Z" fill={fill} />
    <path d="M3 10C3 8.08611 3.00212 6.75129 3.13753 5.74416C3.26907 4.76579 3.50966 4.2477 3.87868 3.87868C4.2477 3.50966 4.76579 3.26907 5.74416 3.13753C6.75129 3.00212 8.08611 3 10 3H14C15.9139 3 17.2487 3.00212 18.2558 3.13753C19.2342 3.26907 19.7523 3.50966 20.1213 3.87868C20.4903 4.2477 20.7309 4.76579 20.8625 5.74416C20.9979 6.75129 21 8.08611 21 10V14C21 15.9139 20.9979 17.2487 20.8625 18.2558C20.7309 19.2342 20.4903 19.7523 20.1213 20.1213C19.7523 20.4903 19.2342 20.7309 18.2558 20.8625C17.2487 20.9979 15.9139 21 14 21H10C8.08611 21 6.75129 20.9979 5.74416 20.8625C4.76579 20.7309 4.2477 20.4903 3.87868 20.1213C3.50966 19.7523 3.26907 19.2342 3.13753 18.2558C3.00212 17.2487 3 15.9139 3 14V10Z" stroke={fill} stroke-width="2" />
    <circle cx="15" cy="9" r="2" fill={fill} />
  </svg>
}
export function LockIcon({ fill }: { fill: FillColor }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.87868 7.87868C3 8.75736 3 10.1716 3 13V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V13C21 10.1716 21 8.75736 20.1213 7.87868C19.2426 7 17.8284 7 15 7H9C6.17157 7 4.75736 7 3.87868 7.87868ZM12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15ZM15 14C15 15.3062 14.1652 16.4175 13 16.8293V19H11V16.8293C9.83481 16.4175 9 15.3062 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14Z" fill={fill} />
    <path d="M16.5 7.99981V7.99981C16.8043 6.17359 16.0108 4.33842 14.4717 3.30935L14.0979 3.05946C12.0734 1.70579 9.3937 1.87263 7.55269 3.46699L6.66992 4.23149" stroke={fill} stroke-width="2" stroke-linecap="round" />
  </svg>
}
