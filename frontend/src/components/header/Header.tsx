import '../../styles/header.css';

const Header = () => {
  return (
    <header className="headerComponent">
      <div className="containerLogo">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="85" height="40" viewBox="0 0 85 40" fill="none">
            <g clip-path="url(#clip0_4_24)">
              <path d="M0.259155 17.5243C0.511737 16.6014 0.7747 15.8034 1.01528 14.9986C3.11716 7.96738 7.66979 3.35345 14.6237 1.08267C15.5336 0.785527 16.1714 0.934626 16.6687 1.79937C17.6947 3.58368 18.7673 5.34117 19.9893 7.39271C14.0737 8.26539 9.87498 10.996 8.21502 16.7234C7.23116 20.1179 7.65071 23.4074 9.37488 26.4907C10.8408 29.1122 12.9916 30.9811 15.8209 32.0179C18.585 33.0309 21.3811 32.9926 24.2123 32.2745C27.158 31.5274 29.0672 29.2759 31.4937 27.1032C32.7098 29.3329 33.8708 31.3229 34.8492 33.3994C35.0027 33.7251 34.4441 34.5746 34.0156 34.9584C31.3624 37.3342 28.2255 38.8197 24.8092 39.7345C24.1884 39.9008 23.5416 39.9693 22.8559 40.1713C22.5285 40.2598 22.252 40.2598 21.8036 40.1805C20.981 40.0756 20.3305 40.05 19.5937 40.0175C19.3109 40.0936 19.1143 40.1767 18.9177 40.2598C18.6413 40.2598 18.3648 40.2598 17.9367 40.1726C17.6175 40.0484 17.4503 40.01 17.2825 39.9745C9.39697 38.3096 3.81374 33.9403 1.15504 26.1539C0.814305 25.156 0.555772 24.1299 0.259155 23.1169C0.259155 21.2933 0.259155 19.4696 0.259155 17.5243Z" fill="#567498" />
              <path d="M36.4182 0.259735C37.8955 0.730777 39.3718 0.995448 40.5866 1.70793C46.4168 5.12721 48.2447 10.912 45.2145 17.0077C44.2265 18.9951 44.3835 20.3655 45.5079 22.1158C47.3238 24.9428 48.8957 27.9273 50.6028 31.0089C50.6004 31.2731 50.5659 31.3736 50.5314 31.4741C48.637 31.5405 46.7429 31.6213 44.848 31.6685C43.3905 31.7049 42.3564 31.1176 41.6035 29.7741C40.1486 27.1781 38.5943 24.6338 36.9823 22.1321C35.8776 20.4178 35.7057 18.8215 36.9198 17.1006C37.564 16.1874 38.1062 15.1947 38.6267 14.2021C40.46 10.706 38.7645 7.7141 34.8067 7.5613C32.3949 7.46818 29.9685 7.43952 27.5627 7.59674C25.2517 7.74776 23.6428 6.96602 22.6607 4.84954C22.1168 3.67746 21.4678 2.55446 20.9219 1.38322C20.801 1.12378 20.9154 0.754162 20.9562 0.347505C21.6906 0.259735 22.3903 0.259735 23.2817 0.337767C24.8076 0.447167 26.1418 0.478534 27.5802 0.512536C28.131 0.430025 28.5777 0.344881 29.0244 0.259735C31.4485 0.259735 33.8726 0.259735 36.4182 0.259735Z" fill="#87A1BC" />
              <path d="M85.2592 8.73375C80.1813 17.4292 75.1021 26.0264 70.0272 34.6261C69.195 36.0362 68.405 37.4718 67.5457 38.8648C67.2861 39.2856 66.8585 39.6023 66.3394 39.8958C63.9042 39.8597 61.6376 39.8945 59.3711 39.9293C58.4206 39.3594 59.1604 38.7866 59.4342 38.3153C63.3973 31.4926 67.3968 24.6912 71.3687 17.8736C72.931 15.1919 74.4759 12.4991 75.9725 9.78026C76.9151 8.06785 78.2511 7.29908 80.2154 7.54479C81.8263 7.7463 83.4515 7.8321 85.1648 8.01056C85.2592 8.24674 85.2592 8.44154 85.2592 8.73375Z" fill="#FFA800" />
              <path d="M59.4448 39.9611C61.6376 39.8945 63.9042 39.8597 66.2493 39.897C66.1792 40.0169 66.0304 40.0647 65.8524 40.1861C63.9173 40.2598 62.0115 40.2598 59.9842 40.2598C59.7481 40.1708 59.6333 40.0819 59.4448 39.9611Z" fill="#FFA100" />
              <path d="M27.4759 0.509913C26.1417 0.478546 24.8076 0.447178 23.3983 0.337778C24.6246 0.259746 25.9261 0.259747 27.3494 0.322307C27.4712 0.384868 27.4759 0.509913 27.4759 0.509913Z" fill="#9FB3C8" />
              <path d="M27.5802 0.512536C27.476 0.509902 27.4713 0.384857 27.4704 0.322296C27.9138 0.259735 28.3581 0.259735 28.9134 0.259735C28.5777 0.34488 28.131 0.430025 27.5802 0.512536Z" fill="#AFBFD1" />
              <path d="M50.528 31.5646C50.5659 31.3736 50.6004 31.2731 50.6551 31.0949C51.3218 30.1123 52.038 29.249 52.6021 28.2953C54.7069 24.7365 56.7586 21.1462 58.8403 17.5737C59.0474 17.2182 59.3235 16.903 59.7388 16.3349C60.6889 17.8666 61.4187 19.2769 62.3677 20.519C63.8375 22.4427 63.4393 24.0605 62.2324 25.9965C59.7021 30.0557 57.4002 34.2597 55.0683 38.44C54.4212 39.6002 53.6287 40.1066 52.2776 40.031C50.3528 39.9233 48.4176 40.0036 46.0823 40.0036C46.5192 38.9624 46.7679 38.1757 47.161 37.4697C48.25 35.5135 49.3992 33.5909 50.528 31.5646Z" fill="#FFA800" />
            </g>
            <defs>
              <clipPath id="clip0_4_24">
                <rect width="85" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <h1>CPMoney</h1>
        </div>
      </div>

      <button className="btnNewTransaction">
        Cadastrar nova transação
      </button>
    </header>
  )
};

export default Header