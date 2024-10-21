function drawShape() {
    const shapeContainer = document.getElementById('shapeContainer');
    shapeContainer.innerHTML = ''; // Clear previous shapes

    const shape = document.getElementById('shapeSelect').value;
    const size = document.getElementById('sizeInput').value;

    if (!size) {
        alert("Please enter a size for the shape.");
        return;
    }

    let shapeElement;

    if (shape === 'circle') {
        shapeElement = document.createElement('div');
        shapeElement.style.width = size + 'px';
        shapeElement.style.height = size + 'px';
        shapeElement.style.borderRadius = '50%';
        shapeElement.style.backgroundColor = '#28a745';
    } else if (shape === 'square') {
        shapeElement = document.createElement('div');
        shapeElement.style.width = size + 'px';
        shapeElement.style.height = size + 'px';
        shapeElement.style.backgroundColor = '#007bff';
    } else if (shape === 'triangle') {
        shapeElement = document.createElement('div');
        shapeElement.style.width = '0';
        shapeElement.style.height = '0';
        shapeElement.style.borderLeft = size + 'px solid transparent';
        shapeElement.style.borderRight = size + 'px solid transparent';
        shapeElement.style.borderBottom = size + 'px solid #ffc107';
    }

    shapeElement.style.margin = '0 auto';
    shapeContainer.appendChild(shapeElement);
}