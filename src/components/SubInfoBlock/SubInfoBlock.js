import React from 'react'

import './style.css'

function SubInfoBlock({data, fields}) {
    // Получаем ID из поля url полученного объекта
    const dataImgId = data.url.split('/').filter(it => it.length !== 0).splice(-2).join('/').replace('people', 'characters')
        // Собираем шаблон картинки
    const dataAvatar = `https://starwars-visualguide.com/assets/img/${dataImgId}.jpg`

    return (
        <div className='sub-info-block'>
            <div className="image-block">
                <img src={dataAvatar} alt=""/>
            </div>
            <div className="sub-info-text-block">
                {
                    // Перебираем переданные из props поля и выводим
                    fields.map((it, index) => {
                        return (
                            <span key={index}>{typeof data[it] === 'string' ? data[it] : null}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SubInfoBlock