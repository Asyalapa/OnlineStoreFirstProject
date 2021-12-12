import React, {useState} from 'react';
import Modal from "../components/Modal";
import '../styles/App.css'

const Articles = () => {
    const [modal, setModal] = useState(false)
    const article = [
        {
            id: 1,
            title: 'Материалы для ортопедических матрасов',
            preview: 'Ортопедические матрасы IDEAL - из высококачественных материалов',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
                'obcaecati, quae quaerat. Accusantium aspernatur consequuntur dolorem doloribus expedita harum magni ' +
                'molestiae, molestias mollitia nihil ratione, voluptatum. Dicta eaque error facere fuga illo possimus similique veritatis. Fuga perspiciatis sed sequi tenetur. ' +
                'Blanditiis dignissimos earum et ex hic labore quas quibusdam? Dicta ipsa libero nesciunt, porro ' +
                'veritatis voluptate! Alias dignissimos distinctio ipsam ipsum quas, tempore veniam voluptas voluptatibus! Aliquid amet animi ' +
                'architecto consequatur consequuntur delectus eligendi eum ex excepturi, explicabo, incidunt nostrum ' +
                'numquam placeat, ratione saepe tempore vel.'
        },
        {
            id: 2,
            title: 'Как привыкнуть к новому матрасу',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, consectetur consequatur cumque doloribus fuga in maiores mollitia nam numquam obcaecati quaerat sunt voluptatem! Cumque eligendi nisi qui saepe velit!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
                'obcaecati, quae quaerat. Accusantium aspernatur consequuntur dolorem doloribus expedita harum magni ' +
                'molestiae, molestias mollitia nihil ratione, voluptatum. Dicta eaque error facere fuga illo possimus similique veritatis. Fuga perspiciatis sed sequi tenetur. ' +
                'Blanditiis dignissimos earum et ex hic labore quas quibusdam? Dicta ipsa libero nesciunt, porro ' +
                'veritatis voluptate! Alias dignissimos distinctio ipsam ipsum quas, tempore veniam voluptas voluptatibus! Aliquid amet animi ' +
                'architecto consequatur consequuntur delectus eligendi eum ex excepturi, explicabo, incidunt nostrum ' +
                'numquam placeat, ratione saepe tempore vel.'
        },
        {
            id: 3,
            title: 'Рекомендации по использованию и уходу за ортопедическими матрасами «Идеал»',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, consectetur consequatur cumque doloribus fuga in maiores mollitia nam numquam obcaecati quaerat sunt voluptatem! Cumque eligendi nisi qui saepe velit!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
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
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
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
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
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
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
                'obcaecati, quae quaerat. Accusantium aspernatur consequuntur dolorem doloribus expedita harum magni ' +
                'molestiae, molestias mollitia nihil ratione, voluptatum. Dicta eaque error facere fuga illo possimus similique veritatis. Fuga perspiciatis sed sequi tenetur. ' +
                'Blanditiis dignissimos earum et ex hic labore quas quibusdam? Dicta ipsa libero nesciunt, porro ' +
                'veritatis voluptate! Alias dignissimos distinctio ipsam ipsum quas, tempore veniam voluptas voluptatibus! Aliquid amet animi ' +
                'architecto consequatur consequuntur delectus eligendi eum ex excepturi, explicabo, incidunt nostrum ' +
                'numquam placeat, ratione saepe tempore vel.'
        },
        {
            id: 7,
            title: 'Как выбрать матрас в детскую кроватку?',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, consectetur consequatur cumque doloribus fuga in maiores mollitia nam numquam obcaecati quaerat sunt voluptatem! Cumque eligendi nisi qui saepe velit!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
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
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
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
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae doloremque mollitia nostrum ' +
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
                    <div className="article__box" onClick={() => setModal(true)} key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.preview}</p>
                        <Modal active={modal} setActive={setModal}>
                            {item.text}
                        </Modal>
                    </div>
                )
            }
        </div>
    );
};

export default Articles;