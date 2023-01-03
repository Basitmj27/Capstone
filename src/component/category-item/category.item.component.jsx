import './category.style.scss';

const CategoryItem = ({category}) => {
    const{imageUrl, tilte} = category;
    return(
        <div className="category-container">
            <div 
            className="background-image" style={{ 
            backgroundImage: `url(${imageUrl})`,
            }}
            />
            <div className="category-body-container">
            <h2>{tilte}</h2>
            <p>shop Now</p>
            </div>
        </div> 
    );
}

export default CategoryItem;