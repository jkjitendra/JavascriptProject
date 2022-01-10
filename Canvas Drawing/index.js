
    const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //strokestyle specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes.
    ctx.strokeStyle = '#BADA55';
    // lineJoin determines the shape used to join two line segments where they meet.			
    ctx.lineJoin = 'round';
    // lineCap determines the shape used to draw the end points of lines.
    ctx.lineCap = 'round';
    // lineWidth sets the thickness of lines
    ctx.lineWidth = 100;

    let isDrawing = false;
    let lastX = 0; 			
    let lastY = 0;
    let hue = 0;
    let direction = true;

    function draw(e){
        if (!isDrawing) return; // stop the function from running when they are not moused down
        console.log(e);
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        // beginPath method starts a new path by emptying the list of sub-paths. 
        // Call this method when you want to create a new path.
        ctx.beginPath();
        
        // To create a new sub-path, i.e., one matching the current canvas state, you can use
        // moveTo method begins a new sub-path at the point specified by the given (x, y) coordinates.
        // start from
        ctx.moveTo(lastX, lastY);
        // lineTo method  adds a straight line to the current sub-path by connecting the sub-path's 
        // last point to the specified (x, y) coordinates.
        // go to
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke(); // Render the path
        // After 1 draw make the last coordinates as first coordinates
        [lastX, lastY] = [e.offsetX, e.offsetY];
        //increase hue to change color
        hue++;
        //reset hue to zero
        if (hue >= 360) {
            hue = 0;
        }

        //flip the direction
        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
            direction = !direction;
        }

        // as per direction increase or decrease the lineWidth
        if(direction) {
            ctx.lineWidth++;
        } else {
            ctx.lineWidth--;
        }

    }
    // mousedown event is fired at an Element when a pointing device button is pressed
    // while the pointer is inside the element.
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    // mousemove event is fired at an element when a pointing device (usually a mouse) is moved 
    // while the cursor's hotspot is inside it.
    canvas.addEventListener('mousemove', draw);

    // mouseup event is fired at an Element when a button on a pointing device is released
    // while the pointer is located inside it.
    canvas.addEventListener('mouseup', () => isDrawing = false);

    // mouseout event is triggered if a mouse pointer leaves any child elements as well as the selected element.
    canvas.addEventListener('mouseout', () => isDrawing = false);