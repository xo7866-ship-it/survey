export interface PageContent {
    id: string;
    title: string;
    content: string; // We'll store HTML/Text here
    updatedAt: string;
}

// In-memory storage for pages
// In a real app, this would be a database
let pages: PageContent[] = [
    {
        id: 'about',
        title: '지혜서원 이야기',
        // Note: We use a single string without newlines between <p> tags to prevent extra spacing
        content: `<p class="textBlock"><strong>지혜서원</strong>은 한권의 책이 마음에서 자라,
다시 무성한 숲이 되기까지 '종이 수목원'을 꿈꾸는 특별한 서원입니다.</p><p class="textBlock">우리는 단순한 지식 전달을 넘어, 삶의 지혜와 위로가 담긴 책들을 소개합니다.
한 사람의 인생을 바꿀수도 있는 소중한 문장들을 여러분과 나누고 싶습니다.</p>`,
        updatedAt: new Date().toISOString()
    }
];

export const pageService = {
    getAll: () => {
        return pages;
    },

    getById: (id: string) => {
        return pages.find(p => p.id === id);
    },

    update: (id: string, content: string) => {
        const pageIndex = pages.findIndex(p => p.id === id);
        if (pageIndex !== -1) {
            pages[pageIndex] = {
                ...pages[pageIndex],
                content: content,
                updatedAt: new Date().toISOString()
            };
            return pages[pageIndex];
        }
        return null;
    }
};
