      const canvas = document.getElementById('miniChart1');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 50);
        ctx.bezierCurveTo(20, 45, 40, 60, 60, 30);
        ctx.bezierCurveTo(80, 10, 100, 40, 120, 20);
        ctx.stroke();

        // Add a dot at the end
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.arc(120, 20, 3, 0, Math.PI * 2);
        ctx.fill();
      }