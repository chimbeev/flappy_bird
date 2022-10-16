const RESOURCE_TYPE = { //Тип загружаемых данных
    IMAGE: 'image',
}
class ResourceLoader {
    _typeLoadersMap = { //Обработчик загрузки
        [RESOURCE_TYPE.IMAGE]: ({src, width, height}) => {
            return new Promise((resolve, reject) => {
                const image = new Image(width, height)
                image.addEventListener('load', () => resolve(image))
                image.addEventListener('error', (error) => reject(error))
                image.src = src
            });
        }
    }
    async load(resource) { //Загрузка асинхронно ресурсов
        const loader = this._typeLoadersMap[resource.type]
        return await loader(resource)
    }
}
