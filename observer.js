const singleElement = document.querySelector('#example');
const multipleElements = document.querySelectorAll('.example');

const options = {
	root: null, // when null, root is the viewport
	threshold: 0, // scale 0 - 1 (% of the element that reaches the root to trigger the event)
	rootMargin: '-150px', // feel free to try with different values
};

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		}
		// on this line, add what you want to happen to entry.target when it intersects with the root
		observer.unobserve(entry.target); // will trigger the event only once for each item. if you want to trigger the event back and forth, remove this line
	});
}, options);

observer.observe(singleElement); // when observing a single element

multipleElements.forEach((element) => {
	observer.observe(element);
}); // when observing multiple elements

// you can export it since the type is already set to module
