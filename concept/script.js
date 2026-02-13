const circle = document.getElementById("circle");

const observer = new IntersectionObserver((item) => {
  //   console.log(item);
  const trackingInfo = item[0]; //isIntersecting hold in idexing 0 because it is an array and we have only one element in the array
  if (trackingInfo.isIntersecting) {
    console.log("circle is visible");
   //  observer.disconnect(); //to stop observing the element after it becomes visible
  } else {
    console.log("circle is not visible");
  }
});

observer.observe(circle);
