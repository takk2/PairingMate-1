import { useEffect, useState } from "react";

interface MapProps {
  onClickSearchList: (location: string) => () => void;
  isActive: boolean;
}

const SeoulMap = (props: MapProps) => {
  return (
    <>
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 723.75 555.5"
      >
        <defs>
          <style>
            {
              ".cls-1{fill:#d2d1cf}.cls-3{isolation:isolate;font-size:12px;font-family:NotoSansKR-Bold-KSCpc-EUC-H,Noto Sans KR; fill:#d2d1cf;} "
            }
          </style>
        </defs>
        <g className={"seongbuk"} onClick={props.onClickSearchList("성북구")}>
          <path
            className="cls-1 "
            d="m365.658 153.522 3.367 5.439 3.898 6.753 1.07 5.394.458 4.812 5.716 7.274-1.429 4.574-.209 3.962 1.615 1.883-.573 2.288 1.731 4.451-.715 3.932-14.23 6.606-1.968 3.937 5.704 4.482 8.99 1.027 3.808 5.33 8.881 2.05 8.585-1.709 6.978-.664-.31 6.191 4.844 6.459 3.795 3.523.777 5.7 1.853 2.864 4.583-2.183 2.541.763 3.332-1.389 5.004 4.066 1.814 4.665.721.927 2.97-2.179h3.373l7.247-4.831 7.728-7.729 6.336-7.131 1.459-7.297 4.382-.675 2.465-10.023 5.222-1.589 3.885 1.942h2.129l4.813-8.02 5.351-2.294 8.348-.521 2.188.121 5.319-8.815 5.237.181 8.941-5.91.761-3.174-1.501-4.501-1.461-3.013-3.524 1.117-3.045.662-5.935.148-1.874-3.602-5.08-3.282-4.508-3.88-9.161-10.13-.943.938-3.884 2.97-1.454 4.363-5.327 5.847-6.516 5.792-1.566 3.394-15.139 8.831 1.017-6.439-4.714-.907-7.88 2.364-9.626-7.346-4.078.48-6.411-3.104-5.877-4.541-2.235-7.266.618-4.739-7.162-1.754-7.703-3.188-3.582-5.885-3.735-2.489-2.091-3.253-4.008-.944-5.024-4.23-7.024-6.553-10.51 5.78-2.125 3.25-.699-.22.974 6.33 4.008 3.537z"
          />
          <text className="cls-3" transform="translate(418.29 214.327)">
            {"\uC131\uBD81\uAD6C"}
          </text>
        </g>
        <g className="gangbuk" onClick={props.onClickSearchList("강북구")}>
          <path
            className="cls-1"
            d="m387.442 142.873 4.492 1.056 2.409 3.747 3.765 2.51 3.418 5.616 6.69 2.768 9.445 2.29-.882 6.761 1.765 5.733 4.997 3.862 5.215 2.494 4.422-.52 9.374 7.154 7.12-2.136 8.286 1.593-.483 3.061 8.861-5.169 1.433-3.106 6.924-6.154 4.734-5.207 1.546-4.637 4.537-3.47.803-.803-4.352-6.425-5.561-3.059-.035.155-.387-.387-.367-.202.059-.106-3.231-3.231-6.126-6.642-6.141-7.934-2.724-7.429-3.841-4.066-7.049-3.273-5.517-6.717-6.123-.037-6.192-1.407-3.066-6.131.81-3.24-1.753-.657.562-17.156 2.769-1.615-.822-3.703.853-5.691 3.578-4.294-.349-2.099-2.011-4.022-4.876-4.105-2.234-8.439-6.344-4.569-1.329-10.636-3.139-.449-2.875.625-2 1.875-3.375-.875-2.75.625L398 36.5l-1.75 2-3.125 4-2.25.875-1.75 1.375.625 3.125 1.625 4.375 1.5 8.375-1.125 12.125-10.875 6.125-3.5 8.75-7 5.125-2.5 1 .125 3.125 2.625 1.625.75 4.75L376.75 114l-2.625 6.625 3.375 1.875 1.5 4-2.656 6.419 6.679 6.235 4.419 3.719z"
          />
          <text className="cls-3" transform="translate(410.873 138.717)">
            {"\uAC15\uBD81\uAD6C"}
          </text>
        </g>

        <g className="mapo" onClick={props.onClickSearchList("마포구")}>
          <path
            className="cls-1 mapo"
            d="M180.213 269.202l9.982 6.986 6.896 5.38 9.297 6.806 8.881 5.87 8.267 6.588 6.898 6.569 8.501 5.51 8.167 6.5 10.416 7.32 5.432 1.81L269 327l5.965-.916 7.268-.176 4.491 2.694 5.726 2.863 2.764-.922 4.934.822 3.159 3.98 5.044 8.903.024-.063 1.035.399h.031l4.107-.329 6.119-.314 2.176-1.495 6.828-7.479 3.827-5.26 2.091-5.753 2.837-1.951 3.653-5.258-.385-2.051-.673-4.206-.756-5.847 2.815-3.485-3.281-1.947-4.122 1.199-5.667.666-6.042 1.005-16.687 1.486-6.927 2.028-4.74-.19-9.793-4.982-6.645-3.127.877-5.482 1.414-3.086-2.857-2.144-15.959-5.944-1.551-2.586-15.223-7.98-8.834-7.333.218-.262-13.878-11.4-10.198-8.86-11.637-11.315-2.548 2.223-.75 5-4.625 3.375-.25 2.875 1.625.875v3.375l-.75.625-1 3.5-3 1.375-5.75 2.25-8.125 2.375-5.295 3.158 1.115.78 9.018 6.514z"
          />
          <text className="cls-3" transform="translate(242.041 308.692)">
            {"\uB9C8\uD3EC\uAD6C"}
          </text>
        </g>

        <g onClick={props.onClickSearchList("중랑구")}>
          <path
            className="cls-1"
            d="m858.113 503.71-4.717 2.83-6.707 4.116-2.889-4.249-3.149-3.778-2.771.477c-.012.002-2.388.393-4.766.777a650.13 650.13 0 0 1-3.277.522c-.489.076-.92.143-1.294.174-.426.238-.977.503-1.667.835-1.149.554-2.685 1.288-4.22 2.02-2.736 1.306-5.476 2.608-6.034 2.874l-6.206 4.208 1.467 3.054 1.803 5.407-.049.201 1.904 19.035-4.397 7.538.476 10.337 1.3 7.446 3.903 5.509 6.627 12.445 1.94 7.245-.509 6.99.361 3.253 4.401.8 8.538.972 9.65-.366 9.635-1.807 4.9-2.868 2.085-1.346-.077-2.859.625-1.25 2.625-3.875.875-2.125.25-2.5 1-1.125 2.625-1.375 2.375-1.75 3.375-1.75 1.25-3.875 1.125-4.625 1-4 2-4.5 1-2.5 3.25-2 1.75-1 1.75-1.625.375-2.375-.5-3.375-1.5-3.25-1.624-2.374.875-1.875 2-2.75 2.375-2.75.625-2.75.25-5.125-.625-2.5-1.75-2.875-.25-1.625 1.375-1.875-.375-3.5-.125-4.5-.25-3.75-.25-2.125-3.125-2.875s-4.125-1.625-4.5-1.75-4.25-1.25-4.25-1.25l-5.75.625-2.441-.665-6.823 2.635Z"
            transform="translate(-286.125 -334.128)"
          />
          <text className="cls-3" transform="translate(546.068 223.386)">
            {"\uC911\uB791\uAD6C"}
          </text>
        </g>
        <g className="dobong" onClick={props.onClickSearchList("도봉구")}>
          <path
            className="cls-1"
            d="m418.657 42.165 6.156 4.432 2.266 8.562 4.624 3.894 2.489 4.978.651 3.901-3.922 4.706-.647 4.309 1.178 5.297-3.231 1.885-.438 13.344 2.247.843-1.19 4.76 1.934 3.869 4.644 1.055h7.041l5.983 7.284 6.951 3.227 4.659 4.934 2.776 7.571 5.818 7.515 5.988 6.484 1.714-7.615 4.747-7.121-1.149-3.446 4.389-2.633 1.715-3.674 4.418-3.314 5.062 5.841.278-3.215.942-3.298v-2.154l-2.706-4.921-.793-6.921-.239-8.139-4.235-7.719-.75-10.252-4.598-8.432 2.393-12.961 2.21-6.876 1.221-8.792.248-7.919.262-4.402.16-1.201L489.25 24l-.125-3.125-.5-2.75-1.125-2.875-1.75-3.25-1.375.375-1.75 1.375-2.125 1.375-1.875-1L477 12.25l-2.5-2-1.375.625-3 2.25-1.75 2.5-2.75 1.25-4.5.5-1.125 2-1.875.5-.875-1.5-.875-2.5-.75-2.5-1.5-4.125L452.75 6l-2.5-3.375-3.625-1.75L442.75 0l-4.5 1.375-8.125 1.75-4.25 1.375-4 1.125-2.625 2.25-2 4.25-.875 2.875-.625 3.5-1.125 4 .375 1.875 1.5 2.375 1.125 2.75-.651 1.348.264-.034 1.419 11.351z"
          />
          <text className="cls-3" transform="translate(442.56 80.056)">
            {"\uB3C4\uBD09\uAD6C"}
          </text>
        </g>

        <g className="nowon" onClick={props.onClickSearchList("노원구")}>
          <path
            className="cls-1"
            d="m778.622 365.716-.262 8.119-1.308 9.252-2.22 6.908-2.137 11.631 4.401 8.069.75 10.248 4.266 7.78.259 8.796.709 6.144 2.794 5.079v3.345l-1.016 3.556-.765 9.932-7.938-9.159-1.582 1.186-1.785 3.826-3.111 1.867.852 2.555-5.253 7.879-2.066 9.185 6.953 3.825 4.979 7.35.098-.089 10.557 11.675 4.226 3.622 5.499 3.535 1.377 2.648 3.915-.098 2.542-.578 5.223-1.662 6.653-4.495c3.688-1.753 8.931-4.252 11.139-5.321l-.044-.179 2.663-.89.093.227c1.871-.288 5.725-.914 8.3-1.338l4.467-.77 4.392 5.282 1.32 1.941 4.28-2.626 5.296-3.178 7.128-.764 3.312-1.301 1.363-.523 1.186-1.581.125-3.5 1.25-2.5.75-1.625 1.375-2.125 3.25-2 2.125-2.125 1.25-2 1.375-1.75.75-5.625.25-2.125v-3.875l-.25-3.875-.25-3.75-1-3.25-2.625-2.875-4.75-3.375s-5.25-2.25-5.625-2.25-2.875-.375-2.875-.375l-2.625.25-2.875.5-3.25.5-4.25-.25-2.125-3.875-2.25-3 1.125-.75.75-2.125.625-1.75.5-2.25-1-4.5-2.375-1.25.125-2.375-.75-2-.125-3.5.5-1.375 1.25-1.75 1.375-1.75 1.875-2.5-.5-2.5-.375-5 .875-1.125.875-2 1-2.5.5-2.25v-2.625l-1.75-3.125-2.125-2.5-.25-2.375-.625-2.5-.875-1.75-1.5-2.25-.25-2.875 1.375-2.25 1.5-2.25 1.625-2.875 2.5-3.375.375-2.375-.5-3.75-1-2.625-2.75-1.125-3.25-1.375-3.125.5-4-.875-3.125-1.375-1.75-3.25-.5-1.75-1.875-3.5-3-3.75-4.5-.5-3.125.75-2.5.5-4.125 2-2.125 1.125-3.25.5-3-.25-2.875-.625-5.375-1.125-2.875.625-.5 1.625-1 2.375-2.125 2.75-3.75 2.375-2.5 1.75-2.25 1.25-2.25.5-2.049 1.844-.207 1.549Z"
            transform="translate(-286.125 -334.128)"
          />
          <text className="cls-3" transform="translate(517.045 110.806)">
            {"\uB178\uC6D0\uAD6C"}
          </text>
        </g>

        <g className="gwangjin" onClick={props.onClickSearchList("광진구")}>
          <path
            className="cls-1"
            d="m572.408 271.302-10.476 1.947-9.989.38-8.863-1.013-3.33-.604-3.149 6.516-6.028 11.304-1.337 2.674 2.156 1.186-.693 4.506-.097.2-7.125 14.875-12.62 26.865-3.802 8.913 4.823 2.461 11.347 4.687 15.32 3.922 4.541-.12 7.235-.241 8.708-3.367 6.752-9.694 8.571-6.554 7.406-8.271 6.48-7.834 3.483-2.553 2.502-4.549 1.609-6.051 3.92-11.219 2.532-3.798-.618-.312-1.791-2.558-3.125-1.5-2.625 1.875-2.75 1.875-4.625 3.875-1.625-1.375-2.25-2.25-3.25-2.25-.125-2.125.875-4.25 1.375-5.5 1.125-5.75.875-4-.625-3.125-2.25-2-.402-.08-2.66 1.716-5.405 3.166z"
          />
          <text className="cls-3" transform="translate(536.793 323.843)">
            {"\uAD11\uC9C4\uAD6C"}
          </text>
        </g>

        <g className="seodaemun" onClick={props.onClickSearchList("서대문구")}>
          <path
            className="cls-1 seodaemun"
            d="M346.281 288.349l.25-5 3.649-3.649-.313-2.81-3.064-.958-8.061-2.34-10.211-9.426-3.976-7.952 6.491-4.154-.806-3.427.288-5.177 2.84-3.714-2.534-3.38-1.147-6.591 1.397-2.794 1.198-4.789.612-3.469-4.368-4.765-5.152 1.515-.654-10.143 1.974-2.853-4.779-7.368-1.754.61-2.459.547-2.667 3.556-2.245 3.266h-4.195l-1.573 2.1-1.604 1.489 1.063 2.998.6 3.598-2.449 3.561-4.374 1.566-3.551.617-7.732 4.735-4.807 5.407v3.843l.652 5.649-6.826 1.218-.452-.452-.548 1.8-1.477 1.478-1.15 4.409-12.127 1.672-.944-6.232-2.66-1.467-1.166 3.149-16.186 17.308 7.386 6.132 15.567 8.121 1.448 2.414 15.375 5.723 5.143 3.856-2.253 4.914-.456 2.85 4.646 2.187 9.249 4.705 3.594.144 6.885-1.986 16.776-1.494 5.944-.991 5.61-.662 5.006-1.483.808.48 2.279-4.102 3.99-3.989z"
          />
          <text className="cls-3" transform="translate(274.633 266.42)">
            {"\uC11C\uB300\uBB38\uAD6C"}
          </text>
        </g>

        <g className="yongsan" onClick={props.onClickSearchList("용산구")}>
          <path
            className="cls-1 yongsan"
            d="M324.396 356.453l1.381 6.043 2.156 6.004 2.439 1.898 4.199 1.299 2.935 1.212 4.201 2.121 2.171 1.552 8.314 3.097 9.323 3.827 9.758 3.091 5.57.301 5.084-2.619 7.448-4.635 10.152-6.49 5.482-3.135 2.061-4.438 5.015-5.516 3.9-2.983 7.086-3.622 4.203-7.738 3.501-4.981-2.92-1.397-4.212 1.134-4.957-1.508-2.01-5.428-.155-5.121-2.196-2.074-2.766-3.503-.466-4.188-3.778-2.267-5.4 1.751-5.048 2.611h-5.221l-2.419-6.143-3.355-3.209-11.189-3.783-6.742.864-2.375-1.697-4.264.285-4.292 1.479-3.405 3.651-2.949-4.671-2.434-2.434-3.597-2.313-2.22 2.748.584 4.531.66 4.121.609 3.244-4.681 6.741-2.496 1.716-1.909 5.247-4.229 5.801-7.258 7.892-3.017 2.073-4.656.238 2.278.879 6.106 8.442z"
          />
          <text className="cls-3" transform="translate(357.38 350.317)">
            {"\uC6A9\uC0B0\uAD6C"}
          </text>
        </g>

        <g
          className="yeongdeungpo"
          onClick={props.onClickSearchList("영등포구")}
        >
          <path
            className="cls-1 yeongdeungpo"
            d="M254.384 427.127l12.887-3.635 2.646-5.587 2.965-11.529 3.111-10.629 3.134-6.271-.435-3.913 14-2.947 9.279-2.321 4.986-1.589-11.721-12.601-7.754-9.044-6.115-1.835-6.155-.683-4.854-2.654-1.998-1.712-13.68-1.866-4.95 3.183-4.893-2.67-2.725-6.129-21.046-16.772-11.45-8.504-7.513-2.732-4.418-5.365-1.073.108 1.424 3.701 3.346 6.388.091-.078 6.203 7.306 4.393 8.801 4.476 11.708-1.13 7.157-5.111 5.84-5.825 3.427-2.973 2.081-1.957 3.915.578 4.334 2.411 5.51-.803 6.957 8.991 4.96 7.173 3.414 6.241 6.607.359 7.555.002 10.071.319 5.373 3.266 9.471 3.555 9.044 4.89 5.809 2.86.88 6.042-8.762 8.951-13.772z"
          />
          <text className="cls-3" transform="translate(222.478 386.898)">
            {"\uC601\uB4F1\uD3EC\uAD6C"}
          </text>
        </g>

        <g onClick={props.onClickSearchList("송파구")}>
          <path
            className="cls-1 Songpa"
            d="M629.747 372.464l-14.727-5.36-8.519-4.074v-6.734l6.06-9.09.881-6.459-2.183-3.547-8.935-5.064-3.032 7.045-9.606 16.23-3.127 7.993-3.186 2.123-4.53 5.926-5.47 1.025-4.83 4.508-7.474 3.877-12.286 3.384-8.922.686-9.974-2.66-7.594.844-.437 2.621 2.288 12.408 1.297 9.082 3.87 6.252 7.126 2.17 12.936 3.314 25.632 7.756 14.464 10.331 8.468 14.566 9.97 14.623 6.061 8.429 6.179 10.733.353.264v-2.291l2-.75 2.625 2.75 6.625.625 2.875-.375 6.25-1.375.625-1.25-2.625-3.125-4.625-.875-4.125-3.375-.25-5.5 3.25-2.125 8.875 4.875 3.625-.125 12.5-9.375 1.25-2.625 2.125-4 1.875-3.75.5-3.125 3.25-.625 2.875-3 .375-3.125 9.875-8.5.125-8.25 1-1 .25-4 1.25-1.125-1-4-2.25-1.625-2.25-4.5-1.875.25-1.125 1.875-2.125-.875-1.375-3.125-5.5-4.625-1.625 2-1.75 2.75-5.75 1.75-7.375-3.5-.25-2.625-.75-2.25-1.625-3.125 2.125-7.25 2.75-2-.625-3.25 1.918-.581-7.234-6.511-15.437-6.569z"
          />
          <text className="cls-3" transform="translate(596.5 417.834)">
            {"\uC1A1\uD30C\uAD6C"}
          </text>
        </g>

        <g className="gangseo" onClick={props.onClickSearchList("강서구")}>
          <path
            className="cls-1"
            d="m105.308 329.432 2.374-6.443 2.969-3.562 3.395 3.96 1.204 5.219-.627 1.254 3.106 1.911 3.941 1.971 1.163 6.341v4.961l2.889 5.471 2.961 7.239 3.099 5.354 37.825-5.988.55-6.317-1.056-6.69 2.066-3.445v-5.099l-4.421-6.121 1.156-6.478 1.736-5.515 2.728-5.909 9.073 5.917 6.221 3.422 7.463-.622 2.953-.591-2.809-5.382-1.531-3.981-9.045-7.753-13.257-9.939-18.639-13.312-13.301-8.978-9.238-6.598-18.461-8.091-16.435-11.746-11.51-9.845-10.333-12.333-7.268-9.906-5.83-4.505-.044.572-.75 1.25-1.5 1-1.375 1.375-.375 7.625 2.75 4.875 1.25 2.625 1.25 2.625.125 3.5-.5 4.25-2.25 1-2.625 3.375-2.625 3.75-.25 2.125-1.625 2.625-2.5 4-.25 5.25-.625-1.375-.25-1.5-1.625-1-1.5 2-2.5 2.375-2.625 2-3.5 2.75-5.25 2.875-.125 2.875-1.375.125-1.375 2.75L30 274.625l.875 1.5-2.25.375L26 279.125l-1.875-.25-2.25-1.125-1.625 1.5-.375 2.25 1.375 1.875 2 5.25.375 5.875-.875-1.25-2.25-1.625-1.875 1.875-3 5.25-1.5 1.375-4.375-.5L6.5 300l-3.125 1.75-3.125 2.375-.25 1.75L13.25 320l6.25-.125L26.875 326l13.375.5 6 4.375.5 3.75 1.75.625 2 .625.375 1.5-1.5.875-.5 2.75 1.625 1.875 1.125 4.625 1.375.25 8.625-6 .375-1.375 2.375-2.75 2.625-2.5 2.25-1.625 2.875-1.875 3.5-.125.625 1 1.25 2.25 2.375 1.25 3.25 1.25 15.25-.25.178 2.402 3.867-5.156 2.888-4.814z"
          />
          <text className="cls-3" transform="translate(93.934 298.354)">
            {"\uAC15\uC11C\uAD6C"}
          </text>
        </g>

        <g className="yangcheon" onClick={props.onClickSearchList("양천구")}>
          <path
            className="cls-1"
            d="m111.269 400.942 4.806.873.383 4.994 3.975 4.585 2.478 2.479 2.888-1.685 4.122-3.488 2.764-3.455 3.777-2.06 3.717-3.346 5.108.68 3.06-2.142 5.596-1.598 3.358 2.35 4.333-1.083 3.876 5.493 9.335-4.245-2.879 8.638.803 1.444 2.216-.492 4.898.98 2.711-.986 2.246-4.411 6-7.334 7.722-9.329.902-7.823-2.255-5.156-.756-5.666 2.71-5.419 3.744-2.616 5.458-3.21 4.222-4.826.87-5.509-4.164-10.891-4.218-8.435-5.067-5.912-4.55.905-8.451.704-7.159-3.943-6.214-4.052-1.231 2.668-1.609 5.15-.873 4.946 4.246 5.879v6.9l-1.934 3.224.944 5.976-.784 9.017-42.175 6.678-4.273-7.407-2.972-7.266-3.14-5.93v-5.567l-.836-4.464-2.783-1.398-5.503-3.386 1.373-2.746-.796-3.449-.605-.706-.365.438-2.365 6.343-3.086 5.129-6 8-.104-.078.112 5.469 3.75 5 .5 2.375 1.25 1.625 2.375 1.125 2.125 1 .125 5.625-2.375 2.125-1.25 3.125-.625 5.25-.625 5.875-1.5 2.875-1.375 1.375v3.375l1.5.625.75 1.375.5 3.75-1.75-.125-.875 2.75.625 2.625.696.279.092-1.149 8.481.687z"
          />
          <text className="cls-3" transform="translate(141.045 383.494)">
            {"\uC591\uCC9C\uAD6C"}
          </text>
        </g>

        <g className="seocho" onClick={props.onClickSearchList("서초구")}>
          <path
            className="cls-1 seocho"
            d="M562.663 500.57l-2.345-9.047-3.911-3.911-2.256-5.154-5.383-3.23.557-7.246-.465.174-5.814 1.82-4.918-1.23-1.873 1.857-6.178 4.804-10.056 3.802-11.353 2.709-7.928-.022-6.205-1.096-9.088-10.843-5.131-7.184-4.961-14.88-5.283 1.356-8.175.39-2.982-10.065-4.977-12.605-8.02-18.39-5-14.333-5.048-13.169-2.544-11.45-3.725-2.732-4.265 2.665-4.462 5.419-3.07 4.605h-3.181l-2.031 4.349-5.079 5.445-6.694 2.343-10.028 10.028-6.316 1.858-6.795-.697-4.342-.28-3.134 3.806 3.763 3.168 5.473 4.743.477 5.249-3.715 2.027.301 7.815-.746 10.788-1.589 4.769-.004 9.196-.536 7.499 1.814 11.247 3.062 5.817 6.965 5.223.368 8.477-.669 7.366v3.905l1.207-.85 8.125-6.75 3.875-.5 3.125-3.75-.25-2.375-2.125-2.875.5-1.625 10.375.375.875 3.125 3.625 8.375 5.5 8 11.875 6.875 2.125-2-.125-2.5 2.25-.75 1.75 2.125 2.25-.125 3.375-1.5 8.375-6.5.875-4.25 5.125-8.25 2 .25 4.375 3.375-.75 2-1 5.5 2.625 3.125.875 3.25 1.5 1.875-4.125 3.75.75 2.875 4.25 5.75.625 2.375-2.25 1.375.5 3.125 2.25 1 .5 2.125-2.25 3.125-3 4.875.875 5.125 4 1 5.25 1.375 4 4.25 7.625 1.25 41.25-.375 5-4.625.875-2-3.875-2.625-.25-4.75 9.125-.25 3.5 2.25 5-.5 4.375-6.75 4.375-.25 2-3.25.375-8.75 2.875-3.5V517l1.5-.375 5-4.75 1.5-2.5.25-4 .006-.089-3.229-1.615-3.489-3.101z"
          />

          <text className="cls-3" transform="translate(432.142 471.406)">
            {"\uC11C\uCD08\uAD6C"}
          </text>
        </g>

        <g className="gangnam" onClick={props.onClickSearchList("강남구")}>
          <path
            className="cls-1"
            d="m611.406 476.232-5.955-8.271-10.08-14.79-8.172-14.053-13.536-9.669-25.097-7.596-12.937-3.315-8.273-2.517-4.796-7.748-1.377-9.644-2.372-12.866.583-3.498-3.053-3.051-4.255-3.275-10.503-7.152-6.674-6.992-13.088-2.634-11-4-9.203-2.957-9.116-1.887-5.253 2.336-4.212 4.849-7.257 6.928-3.638 4.609 3.868 2.836 2.764 12.442 4.96 12.896 4.997 14.324 7.978 18.282 5.063 12.84 2.332 7.871 5.667-.27 7.542-1.984 5.706 17.12 4.835 6.769 8.279 9.872 4.999.881h7.356l10.736-2.602 9.367-3.554 5.749-4.471 2.868-2.868 5.748 1.438 4.931-1.541 4.79-1.799-.777 10.088 4.617 2.769 2.412 5.513 4.089 4.089 2.321 8.953 2.511 2.232 1.754.878.021-.293 4.625-3.25h3.625l7.5-.375 7.875.25 5.75 1.875 5.5 5.375h2.25l1.625-1.75 1.125-2.375 1.625-5.375 3.75-1.125 5.5-5 .023-.659-2.544-1.908-6.448-11.201z"
          />
          <text className="cls-3" transform="translate(500.974 442.154)">
            {"\uAC15\uB0A8\uAD6C"}
          </text>
        </g>

        <g className="gwanak" onClick={props.onClickSearchList("관악구")}>
          <path
            className="cls-1 gwanak"
            d="M382.831 496.383l-.298-6.857-6.369-4.778-3.604-6.848-1.472-9.122-5.651.803-10.335.713-14.969-14.602 1.891-3.404-1.099-3.024-3.121-10.738.582-4.074-1.754-1.228-3.131 2.014v3.68h-8.046l-12.411-3.592-6.409 2.243-5.432.34-6.6 1.389-7.597-2.279-2.598-4.418-1.838 2.022-2.896 5.429-8.989 2.158-7.659 1.596-5.226 4.572-7.564 3.095-9.14 3.121-.221-.648-3.324 6.315 8.884-3.136 5.339 2.669.337 5.048 5.39 3.032v7.45l-6.007 3.162 1.503 4.509 4.005 4.621 4.638 3.092-.775 4.649 1.349 5.394-1.176 4.706 3.338 2.386 8.971-1.381 8.482 11.669 3.981 4.344.296 7.094.769 2.306 6.75 6.125 5.5 5.625-.25 6.375 1.75 2 4.75 1.25 1.625-2 2.625-.75 3.625.125.5-1.375 5.5-1.5 2.875-1.75 2.375 1.125h6.875l3.625-.5 2.5-2.625 5.875-.25 1-1.875 1.25-2.875.375-4.125 1.875-2L355 530.75l6.375-.875 2.5-1.25 1-3.375 3.125-4 4.75-4.375 2.5-3.125.125-3.5 3.75-.5 3.043-.392.006-5.742.657-7.233z"
          />
          <text className="cls-3" transform="translate(302.513 501.5)">
            {"\uAD00\uC545\uAD6C"}
          </text>
        </g>

        <g className="geumcheon" onClick={props.onClickSearchList("금천구")}>
          <path
            className="cls-1"
            d="m279.458 519.971-7.469-10.264-8.363 1.287-5.995-4.283 1.491-5.96-1.318-5.271.558-3.352-3.362-2.241-4.661-5.379-2.497-7.491 6.659-3.504v-3.885l-5.276-2.967-.33-4.953-2.662-1.331-10.733 3.788-.002-.003-1.07 2.034-3.177-.908-9.943 1.714-10.931-7.762-11.314-9.374-9.544-.955.112-1.127-.506.091-3.375-.375-.75 1.5 1 .75.5 6.75 3.125 5.75v2.875l3.625 6.5 13.5 18.125-.25 1.5-1.75-.125-1.25.75-.125 1.875 5.125 4.75 4.375.375-.375 1.5-2.875.375-1.25 2.125.875 1.75.75 6.25 1.125.75 1.75 2.125 2.5 3.375L217 520l2 .125 5.75 5.75-.125 4 1.5 1.625 3.25 5.125L231 540.75l.75 6.25.125 7.875 22.75.625.25-1.625 1.375-3.625 2-3.125 3.875-1 5.5-.25L269 545l3.5-5.625 2.5-5.25 2.75-2.75 3.875-4 1.347-.954-.114-2.727-3.4-3.723z"
          />
          <text className="cls-3" transform="translate(221.962 512.104)">
            {"\uAE08\uCC9C\uAD6C"}
          </text>
        </g>

        <g className="kangdong" onClick={props.onClickSearchList("강동구")}>
          <path
            className="cls-1 kangdong"
            d="M722.75 308.5l-5.125-3.125-.125-2.75-.125-6.25v-4.625l-1.625-4.125-2-3-.5-3.75 1-4.25-1.25-3.25-2.375-5.125-3.875-6.875-2.5-6.875 1.375-2.375L703 250.25l-3 1.625-2.5 1.5-.875-1-1.158-.428-5.999 5.142-4.115 6.171-7.992 3.822-7.513 4.247-7.041 5.688-4.087 2.6-9.411-.697-8.13.325-4.602.92-12.794 8.316-10.107 17.28-10.159 23.604 9.892 5.604 3.151 5.119-1.12 8.207-5.939 8.91v3.934l6.748 3.227 14.598 5.309 15.971 6.793 7.807 7.026V379.5l5-3.75 1.75-10.125 7.5-7.5.125-3.5.875-2.25 2.5-1 1-2.625-.5-2.125.875-1 1.375-1 .75-2.375-1.375-.625-.375-2.5 1-1.125 2.5-4.375 7.25-8.75 2.25-.125.625 1.875 3.375-1 6.625-1 1.75-.625 6.375.875.625-1.875.875-1.75 5.5-1 2.625 1.5 4 2.375V322.5l-1-3.25-.25-3 1.625-2.375 2.375-.625 1.5-1.5-1-3.25z"
          />
          <text className="cls-3" transform="translate(638.312 323.843)">
            {"\uAC15\uB3D9\uAD6C"}
          </text>
        </g>

        <g className="guro" onClick={props.onClickSearchList("구로구")}>
          <path
            className="cls-1"
            d="m212.248 456.894 9.779 6.94 9.39-1.619 1.491.426 5.361-10.187-3.464-1.066-5.777-6.86-3.756-9.562-3.423-9.922-.346-5.872-.002-10.088-.305-6.374-5.093-5.392-6.747-3.213-8.318-4.587-13.77 16.72-2.526 5.051-4.623 1.682-5.102-1.02-3.784.839-2.53-4.555 1.121-3.362-5.332 2.423-4.124-5.841-3.667.917-3.308-2.316-3.738 1.067-3.606 2.525-4.892-.652-3.104 2.738-3.402 1.856-2.681 3.305-4.546 3.818-4.999 2.915-4.224-4.228-4.658-5.374-.282-3.674-2.454-.445-7.426-.595-3.256 1.688-.5 5.5-.625 3.25-2.875 2.875-2 2.375-.875 2.5-2.375.5-2.125 1.25-4-.125-1.375 2.5-.5 3.25 1.25 3 1.625 2.375-.25 2.875 3.625 3.25 1.75 1.125 2.5-.625L94.5 440l2.875.875 3.25 2 .75 3-2 1.625-4.875 2.75-.375 1.5.75 4.375.375 5.5-.625 2.625-3.875.75-1.75 2.25-.875 3.75-1.25-.125-.75 2.375L88 474.625l2.625 2.5 2.625.375 2.25-1.875.25-1.375 1.375-2.875 1.75-.625 1.25 2.125h2l.5-1.625 2.375-.375 1.75 2.125h3l1.375-1.5 4.625-2.875 1.25.5 2.75 1.375 1.5 2.375 3.25-.5.625-1.25 2.125.25 2.625-1.125 3.875.5 4.25 4.875 5.25.25.625-2.625-2.25-.875-.5-1.875 2.5-2.125-.25-5.375 1.375-3.875 7.125.75L157 455.5v-2.375l1.75-1.25 3.25-.375 1.25-1.875 3.875-4.625 2.625-3.625 3.75-1.75 4.875-3.625 2.125.625 6.5 4 .125 4.125 1.5.625h1.625l.625-1 1.25.375-.133 1.394 8.28.827 11.976 9.923z"
          />
          <text className="cls-3" transform="translate(124.983 431.768)">
            {"\uAD6C\uB85C\uAD6C"}
          </text>
        </g>

        <g className="dongjak" onClick={props.onClickSearchList("동작구")}>
          <path
            className="cls-1 dongjak"
            d="M361.616 407.298l-2.197 1.569-7.169-4.151-7.328-4.661-28.87-14.764-2.386.266-9.622 3.314-9 2.333-7.726 1.756-5.848-1.462-2.733 5.468-2.962 10.202-3.085 11.892-3.292 6.949-13.113 3.698-8.359 12.861-5.885 8.533 7.143-2.436 7.017-2.874 5.442-4.76 8.385-1.748 7.634-1.832 2.563-4.708 4.703-5.175 4.068 6.916 5.737 1.721 6.174-1.284 5.127-.321 6.924-2.423 12.923 3.741h4.62v-2.319l6.203-3.986 4.912 3.438-.751 5.26 2.91 10.022 1.536 4.216-1.442 2.596 12.365 12.063 8.942-.617 5.435-.776.557-7.784v-9.523l1.682-5.047.649-10.062-.365-9.519 3.617-1.973-.19-2.085-4.542-3.937-6.317-5.319-4.086-3.268z"
          />
          <text className="cls-3" transform="translate(316.012 418.878)">
            {"\uB3D9\uC791\uAD6C"}
          </text>
        </g>

        <g className="jongno" onClick={props.onClickSearchList("종로구")}>
          <path
            className="cls-1 jongno"
            d="M321.994 178.751l1.871 4.252-.536 5.722-.738 4.993 5.715 8.81-2.526 3.647.346 5.357 3.348-.985 6.632 7.235-.901 5.082-1.363 5.307-1.029 2.059.853 4.909 3.466 4.62-3.66 4.786-.212 3.823 1.194 5.073-6.009 3.846 2.524 5.047 9.289 8.575 7.41 2.151 4.965 1.551.224 2.018 5.82-2.629 11.271.014 11.132 1.484 9.064-.239 4.463-2.114 6.533-2.994 7.751 2.326 8.89-.961 4.17-.783 8.48 1.028 6.5.928 5.405-3.281-.001-11.658h-2.094l-4.53 3.322-2.779-3.574-1.686-4.334-2.996-2.434-2.668 1.111-2.459-.738-5.917 2.818-3.647-5.636-.723-5.3-3.286-3.085-5.575-7.433.19-3.809-3.446.328-8.992 1.799-10.618-2.451-3.692-5.169-8.51-.973-8.296-6.518 3.532-7.063 13.77-6.394.285-1.568-1.769-4.549.427-1.712-1.385-1.617.347-5.718 1.015-3.246-5.284-6.726-.535-5.612-.937-4.682-3.626-6.287-3.109-5.022-4.492-3.962-.988-6.423-6.127 3.135-2.951 1.803-4.283 2.322-7.166 1.231h-1.719l-3.388 4.841-5.906 1.291-3.655.704-1.948 3.765 1.115 8.195.16 6.371z"
          />
          <text className="cls-3" transform="translate(356.169 251.294)">
            {"\uC885\uB85C\uAD6C"}
          </text>
        </g>

        <g className="dongdaemun" onClick={props.onClickSearchList("동대문구")}>
          <path
            className="cls-1 dongdaemun"
            d="M455.82 272.954l5.011-2.051 5.666-3.348 6.003-.805h6.375l11.848 6.319 5.518 6.774 9.916 5.804 12.396 4.861 8.22.216 1.135-2.269 6.019-11.286 2.759-5.712-.303-.056-.639-5.747.491-6.76-1.764-6.588-6.373-11.889-4.142-5.824-1.454-8.399-.521-11.317 4.353-7.462-1.258-12.582-9.481 6.267-4.429-.153-5.348 8.852-3.81-.212-7.654.478-3.982 1.707-5.187 8.645h-4.538l-3.448-1.723-2.444.743-2.535 10.311-4.286.659-1.207 6.037-6.938 7.804-8.122 8.084-6.332 4.222v12.089l6.421 3.668 4.064.643z"
          />
          <text className="cls-3" transform="translate(477.086 250.25)">
            {"\uB3D9\uB300\uBB38\uAD6C"}
          </text>
        </g>

        <g className="junggu" onClick={props.onClickSearchList("중구")}>
          <path
            className="cls-1 junggu"
            d="m430.038 274.735-7.989-.967-3.888.724-9.552 1.032-7.249-2.174-5.485 2.514-5.019 2.378-9.936.261L369.65 277h-10.327l-6.118 2.764.115 1.037-3.851 3.851-.25 5-4.51 4.511-2.116 3.809 3.997 2.374-.075.093 3.714 2.418 2.875 2.927.961 1.522 1.261-1.351 5.376-1.854 5.735-.382 2.291 1.636 6.259-.802 12.477 4.217 4.313 4.124 1.912 4.857h2.448l4.735-2.426 6.816-2.211 6.223 3.733.534 4.812 1.725 2.184 6.067-5.785 3.54-4.18 3.544-2.619 1.222-2.445.884-7.42 5.586-3.791 3.383-.14 1.415-4.39 3.997-5.661.461-1.475-3.404-2.784-.441-10.289-4.855 2.947-7.531-1.076z"
          />
          <text className="cls-3" transform="translate(382.831 298.353)">
            {"\uC911\uAD6C"}
          </text>
        </g>

        <g className="sungdong" onClick={props.onClickSearchList("성동구")}>
          <path
            className="cls-1 sungdong"
            d="m525.293 293.686-7.346-.193-13.205-5.198-10.483-6.137-5.482-6.726-10.652-5.682h-5.523l-5.099.696-5.435 3.193-5.888 2.408-5.436-.858-5.35-3.057.411 9.551 3.93 3.215-1.205 3.859-4.004 5.672-1.918 5.944-4.617.192-3.748 2.543-.782 6.58-1.778 3.556-3.977 2.939-3.336 3.987-6.08 5.798 1.192 1.114.178 5.878 1.323 3.573 2.71.824 4.455-1.198 4.176 2.043 2.618-5.016 4.093-4.092 11.004-.178 5.142.355 11.893 4.928 12.45 4.646 14.239 4.967 6.791 1.698 3.843 2.124 3.723-8.722 12.648-26.924 7.033-14.685.307-1.994-2.844-1.564.029-.059z"
          />
          <text className="cls-3" transform="translate(464.733 309.724)">
            {"\uC131\uB3D9\uAD6C"}
          </text>
        </g>

        <path
          className="han-river"
          d="M891.791 631.464s10-23 35.334-27c0 0 16.666 1.333 24.666-5.333 0 0 17.637-15.971 26.311-14.004l-4.775 4.081-2.832 4.247-1.759 1.918-6.59 3.152-7.758 4.381-7.139 5.753-3.176 2.021-1.982-.147a42.362 42.362 0 0 0-12.419-.257l-2.605.104-5.517 1.084-3.588 2.332a36.535 36.535 0 0 0-7.007 4.554l-3.277 2.131-1.459 2.495a52.571 52.571 0 0 0-8.094 12.821l-1.41 3.703-13.93 32.365-9.617 16.251-1.629 4.133c-1.166 1.89-2.172 3.414-2.924 4.39l-1.197.798-4.134 5.408-5.196.975-5.17 4.826-6.68 3.498-10.953 3.043a51.483 51.483 0 0 1-10.629.415l-8.416-2.243-8.564.95-3.157-3.156-4.552-3.516-10.199-6.909-7.218-7.56-8.225-1.646c-7.012-2.44-17.327-5.942-18.2-5.724l-10.666-3.334a17.637 17.637 0 0 0-5.322-.768l-1.847-.384-2.156.958a11.727 11.727 0 0 0-2.767 1.229l-1.823.811-4.505 5.199-7.282 6.951-.708.894-2.924 2.777-4.907 4.171-1.763 1.101-4.82 5.857-2.312 3.453h-3.485l-2.639 5.649-3.325 3.565a10.27 10.27 0 0 1-3.749 1.205s-5.668-.001-8.668 6.333a19.137 19.137 0 0 1-7.004 6.305l-3.135.921-6.264-.642-5.932-.382-1.347 1.636a5.635 5.635 0 0 0-1.985 1.829 4.312 4.312 0 0 1-1.231 1.107l-5.716-4.572-1.159.827a4.722 4.722 0 0 0-1.754.681l-5-2.894-7.333-4.667-29.456-15.07-.401-.204-2.375.263-.909-.471s-2.94 1.355-7.127 2.964l-2.972 1.014-8.899 2.308-6.984 1.588-5.309-1.328-.068-.61 11.39-2.399 9.425-2.358 9.588-3.052-14.904-16.022-8.286-9.667-7.088-2.126-5.596-.645c-.206-.057-.42-.119-.637-.183l-3.678-1.98-2.546-2.183-15.653-2.134-1.317.847-.338-.033s-.148.21-.41.515l-2.318 1.489-2.44-1.33-2.61-5.871-21.66-17.26-11.842-8.797-6.988-2.541a23.011 23.011 0 0 0-.345-.277l-4.738-5.753-4.13.414.079.791-8.364-7.166-13.361-10.021-18.699-13.355-13.301-8.978-9.333-6.667-18.461-8.091-16.153-11.538-11.189-9.543-10.193-12.161-7.458-10.17-5.434-4.199-.123.1a4.1 4.1 0 0 0-1.195-.59s3.667-7 11.333 0c0 0 22.667 30.333 36 31.333 0 0 18 9.667 24.667 15 0 0 17 15.333 25.333 12.667l6.897-1.592 1.955 1.598 10.624 7.637 9.938 6.954 6.87 5.361 9.393 6.875 8.778 5.796 8.062 6.418 6.952 6.621 8.658 5.633 8.18 6.508 10.847 7.626 6.568 2.19 7.135-1.252 5.344-1.295 6.238-.153 3.793 2.276 6.99 3.5 3.236-1.078 3.066.511 2.233 2.792 6.039 10.656h2.058l7.529 2.905 5.227 7.227 1.265 5.535 2.531 7.083 3.561 2.769 4.528 1.394 2.721 1.12 3.845 1.923 2.4 1.714 8.64 3.219 9.333 3.833 10.117 3.209 6.944.423 5.861-3.02 7.621-4.736 10.104-6.461 6.248-3.57 2.273-4.896 4.426-4.898 3.449-2.666 7.79-3.982 4.515-8.333 4.369-6.219.015.008.059-.111.635-.904-.114-.095 2.647-5.071 2.907-2.908 9.663-.156 4.525.311 11.49 4.76 12.53 4.677 14.333 5 6.607 1.658 3.768 2.082-.019.043 1.245.635 1.167.646.022-.039 4.939 2.521 11.609 4.801 16.027 4.118 12.724-.39 10.042-3.883 4.756-6.869 2.242-3.187 8.317-6.36 7.749-8.615 6.13-7.479 3.864-2.834 2.91-5.291 1.746-6.41 3.67-10.641 2.625-3.939Z"
          transform="translate(-286.125 -334.128)"
          style={{
            fill: "#bbcfeb",
          }}
        />
        <g className="eunpyeong" onClick={props.onClickSearchList("은평구")}>
          <path
            className="cls-1"
            d="m510.444 582.913 12.881 10.581 15.667-16.752 2.167-5.851 7.007 3.866.722 4.768 7.208-.995.85-3.256 1.523-1.523 1.785-5.867 2.881 2.881 2.508-.448-.348-3.105v-5.07l5.86-6.593 8.601-5.266 3.984-.693 3.091-1.124 1.218-1.772-.378-2.267-1.625-4.472 2.958-2.746 2.198-2.998h4.138l1.387-2.017 3.369-4.494 3.455-.768 2.394-.838.534-3.604.454-4.866-1.796-4.081-.172-6.879-1.22-8.888 3.053-5.902 5.048-.971 4.724-1.034 3.612-5.16h3.15l6.297-1.102 3.785-2.05 3.031-1.85 7.062-3.614-.09-.586-4.541-4.632-1.375-7.125-5.375-7-6.375-4.125-.75-7.25-3-2.375-5.625-8.5-5.75-4.875c-6.5-.375-11.875-8.5-11.875-8.5l-13.875 8.125-3.125 6.5c-4.875 5.25-10 2.625-10 2.625l-14.625 10-5.25.875c-7.625 5.5-17.875-4.75-17.875-4.75l-2.375-.375-.626 1.378-.375 2 1.375 1.625 2.125 2.75-.125 2.25v2.25l.625 1.375 1.375 3 .375 1.625-.75.875-.375 3.375.375 1.5.5 1.5-.5 2.125-2 1.25-1.5 1.75-2.5 3.25-.5 2.75 1.25 1.875 2.75 3.5-.25 4.25-.75 2.125-2.25 2-.5 1.125-.125 2 .875 1.625.625 1.375-2.375 1.625-1.875 2.375-1.625 2.375-2.625 2.75-.375 2.625-.875 4.5-1.125 1.125-.125 1.875 1 1.875 1.25 2 .625 3.75-.375 1.875-1.125.75-.375 1.625.75 1.625 1 1.75.125 1.5-1 1-1.875 1.625-.25 3.25 1.5 3.625v1.625l-.625 1.5.375 1.75 1.375 2-.375 2.5-2.25 1.375-1.75 2.25.125 5.125.5 2-3.375 1-3.125.375-1-.875-2.875-.25-1.875 2.25-1.5.375-1.375-1.75h-1.875l-2.375.25-1.25-1.125-1.125-2.375.125-2.125 2.375-2.375-.875-1.5-2.5-2.125-1.75 1.25-3 4-2.06 1.797 11.399 11.086Z"
            transform="translate(-286.125 -334.128)"
          />
          <text className="cls-3" transform="translate(266.11 180.353)">
            {"\uC740\uD3C9\uAD6C"}
          </text>
        </g>
      </svg>
    </>
  );
};

export default SeoulMap;
