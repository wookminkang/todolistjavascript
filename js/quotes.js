
const quotes = [
    {
        인용문: "고통도 없고 이득도 없다",
        저자: "누구든지",
    },
    {
        인용문: "땀도 없고 달콤하지도 않다",
        저자: "누구든지",
    },
    {
        인용문: "인생은 불공평하다, 익숙해지세요",
        저자: "누구든지",
    },
    {
        인용문: "잘 만들 수 없다면 적어도 보기 좋게 만들어라",
        저자: "누구든지",
    },
    {
        인용문: "먹었다면 커피, 일을 시작하십시오",
        저자: "누구든지",
    },
    {
        인용문:"생각은 우리 감정의 그림자입니다 - 항상 더 어둡고",
        저자:"누구든지", 
    },
    {
        인용문:"사는 것은 고통받는 것이고, 생존은 고통에서 어떤 의미를 찾는 것입니다",
        저자: "누구든지",
    },
    {
        인용문: "사실은 없고 해석만 있을 뿐입니다",
        저자: "누구든지" ,
    },
    {
        인용문: "우리는 인생에서 착용하는 사슬을 위조합니다",
        저자: "누구든지",
    },
    {
        인용문: "인간은 그가 아는 ​​한에서만 존재합니다",
        저자: "누구든지",
    },
];
const quote = document.querySelector("#quote span:nth-of-type(1)");
const author = document.querySelector("#quote span:nth-of-type(2)");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.인용문;
author.innerText = todaysQuote.저자;

