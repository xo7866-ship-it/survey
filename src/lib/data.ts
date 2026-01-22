export interface Book {
    id: string;
    title: string;
    author: string;
    price: number;
    image: string;
    description: string;
    rating: number;
    reviews: number;
    category: string;
    publisher?: string;
    publishedDate?: string;
}

export const BOOKS: Book[] = [
    {
        id: '1',
        title: '바리톤 이대범',
        author: '이소연',
        price: 16500,
        image: '/books/baritone_lee_dae_beom.jpg',
        description: '살기 위해 걷고, 노래하기 위해 다시 태어났습니다. 절망 속에서 희망을 전하는 브랜드 메신저, The Pearl Music 대표 이소연이 들려주는 위로와 희망의 이야기.',
        rating: 5.0,
        reviews: 12,
        category: '에세이',
        publisher: '지혜서원'
    },
    {
        id: '3',
        title: '알고 싶은 우리 아이 마음',
        author: '김성현',
        price: 10800,
        image: '/books/knowledge_child_mind.jpg',
        description: '아빠이자 교육 전담 강사로 살며 얻은 감성 청소년 지도법. 아이들의 현재가 미래를 위한 희생이 되지 않기를 바라는 마음을 담은 자녀교육서.',
        rating: 4.9,
        reviews: 28,
        category: '자녀교육',
        publisher: '지혜서원'
    },
    {
        id: 'forgotten-season-2',
        title: '잊혀진 계절 2',
        author: '김도형',
        price: 17100,
        image: '/books/season2.png',
        description: 'JMS 교주 정명석의 실체를 파헤치는 연작 에세이의 두 번째 권입니다. 저자가 겪은 실제 사건들을 바탕으로 종교 집단의 이면과 그들에 맞선 기록을 생생하게 담고 있습니다.',
        rating: 5.0,
        reviews: 12,
        category: '에세이',
        publisher: '지혜서원'
    },
    {
        id: 'forgotten-season-1',
        title: '잊혀진 계절 1',
        author: '김도형',
        price: 16200,
        image: '/books/season1.png',
        description: '교수와 교주의 운명을 건 전쟁실화!! 출간 전 극화(劇化) 결정!!! 저자는 현직 대학교수로서 자신이 젊은 시절 직접 경험한 사실들을 기록한 자전적 에세이입니다. 거대한 신흥종교집단과 그 교주를 상대로 한 싸움을 다루고 있습니다.',
        rating: 5.0,
        reviews: 15,
        category: '에세이',
        publisher: '지혜서원'
    },
    {
        id: 'traces',
        title: '흔적',
        author: 'Maple Yip (입 메이플)',
        price: 21150,
        image: '/books/traces.png',
        description: '넷플릭스 다큐멘터리 \'나는 신이다\'의 주요 인물인 메이플이 직접 겪은 실화를 기록한 책입니다. 사이비 종교 JMS로부터 탈출한 생존자의 기록이자, 그 안에서 벌어진 충격적인 실체를 고발하는 일기입니다.',
        rating: 4.9,
        reviews: 45,
        category: '에세이',
        publisher: '지혜서원'
    },
    {
        id: '4',
        title: '떠나고 싶은 그대에게',
        author: '김성현',
        price: 12420,
        image: '/books/to_you_who_want_to_leave.jpg',
        description: '500여 일간 50여 개국을 여행하며 기록한 에세이. 지식보다 여행을 통해 얻는 지혜를 사랑하는 이상주의자의 여정을 담았습니다.',
        rating: 4.7,
        reviews: 33,
        category: '여행 에세이',
        publisher: '지혜서원'
    },
    {
        id: '5',
        title: '그러니까, 삶척 [e-book]',
        author: '김성현',
        price: 8550,
        image: '/books/samcheok.jpg',
        description: '전 세계를 여행하던 저자가 대한민국의 소도시인 삼척에 정착하게 된 이유. 영원히 청년이고 싶은 초보 중년의 유쾌하고도 진지한 정착기.',
        rating: 4.6,
        reviews: 18,
        category: '여행 에세이',
        publisher: '지혜서원'
    }
];

export function getBookById(id: string): Book | undefined {
    return BOOKS.find((book) => book.id === id);
}
