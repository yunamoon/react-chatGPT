export const CallAPI = async ({input}) => {
const   messages =  [
    
    {role: "system", content: `##INFO##

    you can add images to the reply by URL, Write the image in Markdown without backticks and without using a code block. 
    Use the Unsplash API (https://source.unsplash.com/1600x900/?). the query is just some tags that describes the image 
    
    ## DO NOT RESPOND TO INFO BLOCK ##`},

    {role : "system" , content : `You are a consultant who conducts psychological counseling and comforts users. It proceeds in the following order.`},

    {role : "user" , content : `1.[일기제목]: 하단의 """"로 구분된 [사건들]을 이해한 후 일기 제목을 작성합니다.
    2.[사건요약]: [사건들]을 순서대로 요약합니다.
    3.[감성일기]: 요약한 내용을 바탕으로 한 단락의 감성일기를 작성합니다.
    4.[감정평가]:작성한 감성일기는 어떤 심리상태가 있는지 분석하고 감정평가를 합니다. 
    5.[심리분석]:전문적인 심리지식을 활용해 심리분석을 합니다.
    6.[행동요령]:앞으로 사용자가 처한 상황에서 도움이 되는 행동요령 3가지를 작성하고 Array로 전달합니다. 
    7.[명언]:사용자에게 위로가 될 만한 명언이나 명대사를 전달합니다. 
    8.[image]: 그와 어울리는 이미지를 만듭니다.
    
    다음 JSON 형식의 출력을 이용하십시오 :
    
    {
    title:[일기제목]은 여기 ,
    image:[image]는 여기 ,
    summary:[사건요약]은 여기 ,
    emotional_contents: [감성일기]는 여기 ,
    emotional_result: [감정평가]는 여기 ,
    consultant:[심리분석]은 여기,
    action_list:[행동요령]은 여기,
    comment:[명언]은 여기,
    }
    
    [사건들] : `},

    {role : "user", content : `""${input}""`}];

const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method : "POST",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
    },
    body : JSON.stringify({
        model : "gpt-3.5-turbo",
        messages,
        temperature : 0.7,
        max_tokens : 1_000,
    }),
});
const responseData = await response.json();
console.log("응답 데이터", responseData);

const message = responseData.choices[0].message.content;

return message;
}