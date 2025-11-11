const Section = (props) => {
  // console.log(props);
  console.log(props.showsImages);

  return (
    <section>
      <h2>{props.category}</h2>
      <div>
        {props.showsImages.map((element, index) => {
          console.log(element);
          return <img src={element} alt={props.category + "Show " + index} />;
        })}
      </div>
    </section>
  );
};

export default Section;
