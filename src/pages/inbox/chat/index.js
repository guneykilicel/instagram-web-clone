import { useState } from "react"
import Header from "./components/header"
import Messages from "./components/messages"
import Reply from "./components/reply"


const Chat = ()=>{

    const [messages, setMeesages] = useState([ 
        {
            from:{
                id: 'a8h3x3R0gzXsZozxOHIcSDfPOpm1',
                name: 'Güney Kılıçel',
                username: 'guneyklcl',
                avatar: 'https://pbs.twimg.com/profile_images/1545493638733520898/ZM560Rt6_400x400.jpg'
            },
            message: 'ben güney'
        },
        {
            from:{
                id: 'jCxzEGDOixaLQEBaB2qGHadLrLC3',
                name: 'İrem İrem',
                username: 'iremmm',
                avatar: 'https://pbs.twimg.com/profile_images/1514536839226531840/wa8h7H1H_400x400.jpg'
            },
            message: 'ben irem'
        },
        {
            from:{
                id: 'jCxzEGDOixaLQEBaB2qGHadLrLC3',
                name: 'İrem İrem',
                username: 'iremmm',
                avatar: 'https://pbs.twimg.com/profile_images/1514536839226531840/wa8h7H1H_400x400.jpg'
            },
            message: 'deneme'
        },
        {
            from:{
                id: 'jCxzEGDOixaLQEBaB2qGHadLrLC3',
                name: 'İrem İrem',
                username: 'iremmm',
                avatar: 'https://pbs.twimg.com/profile_images/1514536839226531840/wa8h7H1H_400x400.jpg'
            },
            message: 'test'
        },
        {
            from:{
                id: 'a8h3x3R0gzXsZozxOHIcSDfPOpm1',
                name: 'Güney Kılıçel',
                username: 'guneyklcl',
                avatar: 'https://pbs.twimg.com/profile_images/1545493638733520898/ZM560Rt6_400x400.jpg'
            },
            message: 'ben güney'
        },
        {
            from:{
                id: 'a8h3x3R0gzXsZozxOHIcSDfPOpm1',
                name: 'Güney Kılıçel',
                username: 'guneyklcl',
                avatar: 'https://pbs.twimg.com/profile_images/1545493638733520898/ZM560Rt6_400x400.jpg'
            },
            message: 'architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit' 
        },
        {
            from:{
                id: 'a8h3x3R0gzXsZozxOHIcSDfPOpm1',
                name: 'Güney Kılıçel',
                username: 'guneyklcl',
                avatar: 'https://pbs.twimg.com/profile_images/1545493638733520898/ZM560Rt6_400x400.jpg'
            },
            message: 'ben güney'
        },
        {
            from:{
                id: 'jCxzEGDOixaLQEBaB2qGHadLrLC3',
                name: 'İrem İrem',
                username: 'iremmm',
                avatar: 'https://pbs.twimg.com/profile_images/1514536839226531840/wa8h7H1H_400x400.jpg'
            },
            message: 'ben irem'
        },
        {
            from:{
                id: 'jCxzEGDOixaLQEBaB2qGHadLrLC3',
                name: 'İrem İrem',
                username: 'iremmm',
                avatar: 'https://pbs.twimg.com/profile_images/1514536839226531840/wa8h7H1H_400x400.jpg'
            },
            message: 'deneme'
        },
        {
            from:{
                id: 'jCxzEGDOixaLQEBaB2qGHadLrLC3',
                name: 'İrem İrem',
                username: 'iremmm',
                avatar: 'https://pbs.twimg.com/profile_images/1514536839226531840/wa8h7H1H_400x400.jpg'
            },
            message: 'test'
        },
        {
            from:{
                id: 'a8h3x3R0gzXsZozxOHIcSDfPOpm1',
                name: 'Güney Kılıçel',
                username: 'guneyklcl',
                avatar: 'https://pbs.twimg.com/profile_images/1545493638733520898/ZM560Rt6_400x400.jpg'
            },
            message: 'ben güney'
        },
        {
            from:{
                id: 'a8h3x3R0gzXsZozxOHIcSDfPOpm1',
                name: 'Güney Kılıçel',
                username: 'guneyklcl',
                avatar: 'https://pbs.twimg.com/profile_images/1545493638733520898/ZM560Rt6_400x400.jpg'
            },
            message: 'architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit' 
        },
    ])

    const user = {
        name: 'Kuzey Kılıçel',
        avatar: 'https://pbs.twimg.com/profile_images/1545493638733520898/ZM560Rt6_400x400.jpg'
    }

    return(
        <div className="flex-1"> {/* flex-1 diyorum ki header tamamını doldursun */}
            <Header user={user} />
            <Messages messages={messages} />
            <Reply setMessages={setMeesages} />
        </div>
    )
}
export default Chat