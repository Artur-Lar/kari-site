document.addEventListener('DOMContentLoaded', function() {

    // Получаем текущий URL
    const url = new URL(window.location.href);

    // Извлекаем значение utm_medium из параметров запроса
    const medium = url.searchParams.get('utm_medium') || 'default';

    // Остальная часть кода остается без изменений
    function changeLinks(mediumValue) {
        const baseVkUrl = 'https://vk.com/kariclub_';
        const baseTgUrl = 'https://t.me/kari_club_';
        const vkElement = document.getElementById('vklink');
        const tgElement = document.getElementById('tglink');

        if (!vkElement || !tgElement) return; // Проверяем существование элементов

        switch (mediumValue) {
            case '26':
                vkElement.href = `${baseVkUrl}26`;
                tgElement.href = `${baseTgUrl}26`;
                break;
            case 'kmv':
                vkElement.href = `${baseVkUrl}kmv`;
                tgElement.href = `${baseTgUrl}kmv`;
                break;
            case '05':
				vkElement.href = `${baseVkUrl}05`;
                tgElement.href = `${baseTgUrl}05`;
			break;
			case '95':
				vkElement.href = `${baseVkUrl}95`;
                tgElement.href = `${baseTgUrl}95`;
			break;	
			case '06':
				vkElement.href = `${baseVkUrl}06`;
                tgElement.href = `${baseTgUrl}06`;
			break;
			case '09':
				vkElement.href = `${baseVkUrl}09`;
                tgElement.href = `${baseTgUrl}09`;
			break;
			case '15':
				vkElement.href = `${baseVkUrl}15`;
                tgElement.href = `${baseTgUrl}15`;
			break;
			case '08':
				vkElement.href = `${baseVkUrl}08`;
                tgElement.href = `${baseTgUrl}08`;
			break;
			case '07':
				vkElement.href = `${baseVkUrl}07`;
                tgElement.href = `${baseTgUrl}07`;
			break;
            default:
                vkElement.href = `${baseVkUrl}26`;
                tgElement.href = `${baseTgUrl}26`;
        }
    }

    // Вызываем функцию для изменения ссылок
    changeLinks(medium);
});