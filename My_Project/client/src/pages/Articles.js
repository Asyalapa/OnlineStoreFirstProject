import React, {useState} from 'react';
import Modal from "../components/Modal";
import '../styles/App.css'

const Articles = () => {
    const [modal, setModal] = useState(false)
    const [articleState, setArticleState] = useState([]);
    const article = [
        {
            id: 1,
            title: 'Материалы для ортопедических матрасов',
            preview: 'Ортопедические матрасы IDEAL - из высококачественных материалов',
            text: '1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
                'obcaecati, quae quaerat. Accusantium aspernatur consequuntur dolorem doloribus expedita harum magni ' +
                'molestiae, molestias mollitia nihil ratione, voluptatum. Dicta eaque error facere fuga illo possimus similique veritatis. Fuga perspiciatis sed sequi tenetur. ' +
                'Blanditiis dignissimos earum et ex hic labore quas quibusdam? Dicta ipsa libero nesciunt, porro ' +
                'veritatis voluptate! Alias dignissimos distinctio ipsam ipsum quas, tempore veniam voluptas voluptatibus! Aliquid amet animi ' +
                'architecto consequatur consequuntur delectus eligendi eum ex excepturi, explicabo, incidunt nostrum ' +
                'numquam placeat, ratione saepe tempore vel.'
        },
        {
            id: 2,
            title: `Как привыкнуть к\u00A0\новому\u00A0\матрасу`,
            preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, consectetur consequatur cumque doloribus fuga in maiores mollitia nam numquam obcaecati quaerat sunt voluptatem! Cumque eligendi nisi qui saepe velit!',
            text: '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
                'obcaecati, quae quaerat. Accusantium aspernatur consequuntur dolorem doloribus expedita harum magni ' +
                'molestiae, molestias mollitia nihil ratione, voluptatum. Dicta eaque error facere fuga illo possimus similique veritatis. Fuga perspiciatis sed sequi tenetur. ' +
                'Blanditiis dignissimos earum et ex hic labore quas quibusdam? Dicta ipsa libero nesciunt, porro ' +
                'veritatis voluptate! Alias dignissimos distinctio ipsam ipsum quas, tempore veniam voluptas voluptatibus! Aliquid amet animi ' +
                'architecto consequatur consequuntur delectus eligendi eum ex excepturi, explicabo, incidunt nostrum ' +
                'numquam placeat, ratione saepe tempore vel.'
        },
        {
            id: 3,
            title: 'Рекомендации по уходу',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, consectetur consequatur cumque doloribus fuga in maiores mollitia nam numquam obcaecati quaerat sunt voluptatem! Cumque eligendi nisi qui saepe velit!',
            text: '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
                'obcaecati, quae quaerat. Accusantium aspernatur consequuntur dolorem doloribus expedita harum magni ' +
                'molestiae, molestias mollitia nihil ratione, voluptatum. Dicta eaque error facere fuga illo possimus similique veritatis. Fuga perspiciatis sed sequi tenetur. ' +
                'Blanditiis dignissimos earum et ex hic labore quas quibusdam? Dicta ipsa libero nesciunt, porro ' +
                'veritatis voluptate! Alias dignissimos distinctio ipsam ipsum quas, tempore veniam voluptas voluptatibus! Aliquid amet animi ' +
                'architecto consequatur consequuntur delectus eligendi eum ex excepturi, explicabo, incidunt nostrum ' +
                'numquam placeat, ratione saepe tempore vel.'
        },
        {
            id: 4,
            title: 'Что нужно знать при покупке ортопедического матраса?',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, consectetur consequatur cumque doloribus fuga in maiores mollitia nam numquam obcaecati quaerat sunt voluptatem! Cumque eligendi nisi qui saepe velit!',
            text: '4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
                'obcaecati, quae quaerat. Accusantium aspernatur consequuntur dolorem doloribus expedita harum magni ' +
                'molestiae, molestias mollitia nihil ratione, voluptatum. Dicta eaque error facere fuga illo possimus similique veritatis. Fuga perspiciatis sed sequi tenetur. ' +
                'Blanditiis dignissimos earum et ex hic labore quas quibusdam? Dicta ipsa libero nesciunt, porro ' +
                'veritatis voluptate! Alias dignissimos distinctio ipsam ipsum quas, tempore veniam voluptas voluptatibus! Aliquid amet animi ' +
                'architecto consequatur consequuntur delectus eligendi eum ex excepturi, explicabo, incidunt nostrum ' +
                'numquam placeat, ratione saepe tempore vel.'
        },
        {
            id: 5,
            title: 'Все о матрасах',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, consectetur consequatur cumque doloribus fuga in maiores mollitia nam numquam obcaecati quaerat sunt voluptatem! Cumque eligendi nisi qui saepe velit!',
            text: '5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
                'obcaecati, quae quaerat. Accusantium aspernatur consequuntur dolorem doloribus expedita harum magni ' +
                'molestiae, molestias mollitia nihil ratione, voluptatum. Dicta eaque error facere fuga illo possimus similique veritatis. Fuga perspiciatis sed sequi tenetur. ' +
                'Blanditiis dignissimos earum et ex hic labore quas quibusdam? Dicta ipsa libero nesciunt, porro ' +
                'veritatis voluptate! Alias dignissimos distinctio ipsam ipsum quas, tempore veniam voluptas voluptatibus! Aliquid amet animi ' +
                'architecto consequatur consequuntur delectus eligendi eum ex excepturi, explicabo, incidunt nostrum ' +
                'numquam placeat, ratione saepe tempore vel.'
        },
        {
            id: 6,
            title: 'Ортопедический матрас',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, consectetur consequatur cumque doloribus fuga in maiores mollitia nam numquam obcaecati quaerat sunt voluptatem! Cumque eligendi nisi qui saepe velit!',
            text: '6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
                'obcaecati, quae quaerat. Accusantium aspernatur consequuntur dolorem doloribus expedita harum magni ' +
                'molestiae, molestias mollitia nihil ratione, voluptatum. Dicta eaque error facere fuga illo possimus similique veritatis. Fuga perspiciatis sed sequi tenetur. ' +
                'Blanditiis dignissimos earum et ex hic labore quas quibusdam? Dicta ipsa libero nesciunt, porro ' +
                'veritatis voluptate! Alias dignissimos distinctio ipsam ipsum quas, tempore veniam voluptas voluptatibus! Aliquid amet animi ' +
                'architecto consequatur consequuntur delectus eligendi eum ex excepturi, explicabo, incidunt nostrum ' +
                'numquam placeat, ratione saepe tempore vel.'
        },
        {
            id: 7,
            title: 'Как выбрать матрас в\u00A0\детскую\u00A0\кроватку?',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, consectetur consequatur cumque doloribus fuga in maiores mollitia nam numquam obcaecati quaerat sunt voluptatem! Cumque eligendi nisi qui saepe velit!',
            text: '7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
                'obcaecati, quae quaerat. Accusantium aspernatur consequuntur dolorem doloribus expedita harum magni ' +
                'molestiae, molestias mollitia nihil ratione, voluptatum. Dicta eaque error facere fuga illo possimus similique veritatis. Fuga perspiciatis sed sequi tenetur. ' +
                'Blanditiis dignissimos earum et ex hic labore quas quibusdam? Dicta ipsa libero nesciunt, porro ' +
                'veritatis voluptate! Alias dignissimos distinctio ipsam ipsum quas, tempore veniam voluptas voluptatibus! Aliquid amet animi ' +
                'architecto consequatur consequuntur delectus eligendi eum ex excepturi, explicabo, incidunt nostrum ' +
                'numquam placeat, ratione saepe tempore vel.'
        },
        {
            id: 8,
            title: 'Как выбрать подушку?',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, consectetur consequatur cumque doloribus fuga in maiores mollitia nam numquam obcaecati quaerat sunt voluptatem! Cumque eligendi nisi qui saepe velit!',
            text: '8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
                'obcaecati, quae quaerat. Accusantium aspernatur consequuntur dolorem doloribus expedita harum magni ' +
                'molestiae, molestias mollitia nihil ratione, voluptatum. Dicta eaque error facere fuga illo possimus similique veritatis. Fuga perspiciatis sed sequi tenetur. ' +
                'Blanditiis dignissimos earum et ex hic labore quas quibusdam? Dicta ipsa libero nesciunt, porro ' +
                'veritatis voluptate! Alias dignissimos distinctio ipsam ipsum quas, tempore veniam voluptas voluptatibus! Aliquid amet animi ' +
                'architecto consequatur consequuntur delectus eligendi eum ex excepturi, explicabo, incidunt nostrum ' +
                'numquam placeat, ratione saepe tempore vel.'
        },
        {
            id: 9,
            title: 'Правила здорового сна',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, consectetur consequatur cumque doloribus fuga in maiores mollitia nam numquam obcaecati quaerat sunt voluptatem! Cumque eligendi nisi qui saepe velit!',
            text: '9 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
                'obcaecati, quae quaerat. Accusantium aspernatur consequuntur dolorem doloribus expedita harum magni ' +
                'molestiae, molestias mollitia nihil ratione, voluptatum. Dicta eaque error facere fuga illo possimus similique veritatis. Fuga perspiciatis sed sequi tenetur. ' +
                'Blanditiis dignissimos earum et ex hic labore quas quibusdam? Dicta ipsa libero nesciunt, porro ' +
                'veritatis voluptate! Alias dignissimos distinctio ipsam ipsum quas, tempore veniam voluptas voluptatibus! Aliquid amet animi ' +
                'architecto consequatur consequuntur delectus eligendi eum ex excepturi, explicabo, incidunt nostrum ' +
                'numquam placeat, ratione saepe tempore vel.',
        },
    ]

    return (
        <div className={'article__wrapper'}>
            {
                article.map(item =>
                    <div className="article__box"
                         key={item.id}
                         onClick={() => {
                            setModal(true);
                            setArticleState([item.title, item.text])
                    }}>
                        <h3 className="article__box-title">{item.title}</h3>
                        <p className="article__box-preview"> {item.preview}</p>
                    </div>
                )}
            <Modal active={modal} setActive={setModal} >
                {articleState}
            </Modal>
        </div>
    );
};

export default Articles;