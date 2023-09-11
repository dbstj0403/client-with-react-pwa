import * as React from 'react';
const ModifyIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={14} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M7.695 3.182 2.41 8.468l-.72 2.689-.475 1.771a.293.293 0 0 0 .358.358l1.77-.475 2.69-.72 5.286-5.287-3.622-3.622Zm5.81.612L10.705.996a.582.582 0 0 0-.824 0L8.438 2.439l3.623 3.623 1.443-1.444a.584.584 0 0 0 0-.824"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h14v14H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default ModifyIcon;
