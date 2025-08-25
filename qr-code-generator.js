// Simple QR Code Generator (Local)
class SimpleQRGenerator {
    constructor() {
        this.qrSize = 200;
        this.cellSize = 4;
    }

    // Generate QR code pattern (simplified version)
    generateQRPattern(text) {
        // Create a simple QR-like pattern
        const size = this.qrSize / this.cellSize;
        const pattern = [];
        
        // Create base pattern
        for (let i = 0; i < size; i++) {
            pattern[i] = [];
            for (let j = 0; j < size; j++) {
                // Create a deterministic pattern based on text
                const charCode = text.charCodeAt((i * size + j) % text.length);
                pattern[i][j] = (charCode + i + j) % 2 === 0;
            }
        }
        
        // Add corner finders
        this.addCornerFinder(pattern, 0, 0);
        this.addCornerFinder(pattern, size - 7, 0);
        this.addCornerFinder(pattern, 0, size - 7);
        
        return pattern;
    }

    addCornerFinder(pattern, x, y) {
        // Add corner finder pattern
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                if ((i === 0 || i === 6 || j === 0 || j === 6) || 
                    (i >= 2 && i <= 4 && j >= 2 && j <= 4)) {
                    pattern[y + i][x + j] = true;
                }
            }
        }
    }

    // Draw QR code on canvas
    drawQRCode(canvas, text) {
        const ctx = canvas.getContext('2d');
        const pattern = this.generateQRPattern(text);
        
        // Clear canvas
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, this.qrSize, this.qrSize);
        
        // Draw pattern
        ctx.fillStyle = 'black';
        for (let i = 0; i < pattern.length; i++) {
            for (let j = 0; j < pattern[i].length; j++) {
                if (pattern[i][j]) {
                    ctx.fillRect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
                }
            }
        }
    }

    // Create QR code as data URL
    createQRCodeDataURL(text) {
        const canvas = document.createElement('canvas');
        canvas.width = this.qrSize;
        canvas.height = this.qrSize;
        
        this.drawQRCode(canvas, text);
        return canvas.toDataURL();
    }
}

// Make it globally available
window.SimpleQRGenerator = SimpleQRGenerator;
