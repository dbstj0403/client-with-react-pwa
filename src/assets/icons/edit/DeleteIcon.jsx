import React from 'react';

const DeleteIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={14} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.289 9.763a.525.525 0 1 1-1.05 0v-2.92a.525.525 0 0 1 1.05 0v2.92Zm-2.411 0a.525.525 0 1 1-1.05 0v-2.92a.525.525 0 1 1 1.05 0v2.92ZM5.768 2.25a.583.583 0 0 1 .582-.583h2.418c.321 0 .583.261.583.583v.55H5.767v-.55Zm6.573.55h-1.823v-.55c0-.965-.785-1.75-1.75-1.75H6.35c-.964 0-1.75.785-1.75 1.75v.55H2.66a.7.7 0 0 0-.7.7v.35a.7.7 0 0 0 .7.7h.076l.275 7.02a1.4 1.4 0 0 0 1.4 1.345h6.297a1.399 1.399 0 0 0 1.399-1.345l.276-7.029a.695.695 0 0 0 .66-.692V3.5a.7.7 0 0 0-.7-.7Z"
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
export default DeleteIcon;
