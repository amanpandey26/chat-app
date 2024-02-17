const emojis = [
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
    '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😜', '😝',
    '🤑', '🤗', '🤔', '🤐', '😑', '😶', '🙄', '😏', '😣', '😥',
    '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝',
    '🤤', '😒', '😓', '😔', '😕', '🙃', '🤨', '😎', '🤩', '😈'
  ];
  
  // Function to get a random emoji from the array
export const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  };
  
  
  