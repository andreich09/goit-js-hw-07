const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat'
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running'
    }
];
const addGalleryImg = (image) => {
    const listRef = document.createElement('li');
    listRef.classList.add('galleryCard__style');

    const listRefImg = document.createElement('img');
    listRefImg.setAttribute('src', image.url);
    listRefImg.setAttribute('alt', image.alt);
    listRefImg.setAttribute('width', 250);
    listRefImg.classList.add('galleryCard__style--img');

    listRef.append(listRefImg);

    return listRef;
};

const imdItem = images.map((image) => addGalleryImg(image));

const imageListRef = document.querySelector('#gallery');

imageListRef.append(...imdItem);
