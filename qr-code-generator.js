// Proper QR Code Generator using QRCode.js library
// This creates actual scannable QR codes

// QR Code Generator Class
class ProperQRGenerator {
    constructor() {
        this.qrSize = 200;
    }

    // Generate a proper QR code using a reliable method
    generateQRCode(text) {
        return new Promise((resolve, reject) => {
            try {
                // Use Google Charts API for reliable QR codes
                const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=${this.qrSize}x${this.qrSize}&chl=${encodeURIComponent(text)}&choe=UTF-8&chld=L|0`;
                
                const img = new Image();
                img.crossOrigin = 'anonymous';
                
                img.onload = function() {
                    resolve(img);
                };
                
                img.onerror = function() {
                    // Fallback to QR Server API
                    const fallbackUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${this.qrSize}x${this.qrSize}&data=${encodeURIComponent(text)}&format=png`;
                    const fallbackImg = new Image();
                    fallbackImg.crossOrigin = 'anonymous';
                    
                    fallbackImg.onload = function() {
                        resolve(fallbackImg);
                    };
                    
                    fallbackImg.onerror = function() {
                        reject(new Error('Failed to generate QR code'));
                    };
                    
                    fallbackImg.src = fallbackUrl;
                };
                
                img.src = qrUrl;
                
            } catch (error) {
                reject(error);
            }
        });
    }

    // Create QR code as data URL
    async createQRCodeDataURL(text) {
        try {
            const img = await this.generateQRCode(text);
            
            // Convert image to canvas to get data URL
            const canvas = document.createElement('canvas');
            canvas.width = this.qrSize;
            canvas.height = this.qrSize;
            const ctx = canvas.getContext('2d');
            
            ctx.drawImage(img, 0, 0, this.qrSize, this.qrSize);
            return canvas.toDataURL();
            
        } catch (error) {
            console.error('Error creating QR code:', error);
            throw error;
        }
    }
}

// Make it globally available
window.ProperQRGenerator = ProperQRGenerator;
