export async function fetchCommunityData() {
    try {
        const response = await fetch('/data/community.json');
        if (!response.ok) {
            throw new Error('데이터를 불러오지 못했습니다');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
