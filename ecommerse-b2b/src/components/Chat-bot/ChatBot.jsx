import React, { useState } from 'react';
import { BotMessageSquare, Send, Minimize2, X, ChevronUp } from 'lucide-react';

const ChatbotContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', content: 'Hello! How can I help you with your B2B needs today?' }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { type: 'user', content: message }]);
      // Simulate bot response
      setTimeout(() => {
        setChatHistory(prev => [...prev, { 
          type: 'bot', 
          content: 'Thanks for your message. A customer service representative will respond shortly.' 
        }]);
      }, 1000);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200"
      >
        <BotMessageSquare className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className={`fixed right-4 bottom-4 bg-white rounded-lg shadow-xl transition-all duration-300 ${
      isMinimized ? 'w-72 h-14' : 'w-80 h-96'
    }`}>
      {/* Header */}
      <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BotMessageSquare className="w-5 h-5" />
          <span className="font-medium">Bulkify Support </span>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="hover:bg-blue-700 p-1 rounded"
          >
            {isMinimized ? <ChevronUp className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-700 p-1 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Chat Messages */}
          <div className="p-4 h-64 overflow-y-auto space-y-4">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type}` === 'user' ? 'justify-end' : 'justify-start'}
              >
                <div
                  className={`max-w-80%] p-4 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatbotContainer;