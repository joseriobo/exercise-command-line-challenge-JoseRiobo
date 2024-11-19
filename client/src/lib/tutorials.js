import { fileSystem } from './fileSystem';

export const tutorials = [
  {
    id: 'basics',
    title: 'Terminal Basics',
    steps: [
      {
        id: 'help',
        instruction: "Let's start with the basics! Type 'help' to see all available commands.",
        expectedCommand: 'help',
        hint: "Just type 'help' and press Enter",
      },
      {
        id: 'whoami',
        instruction: "Great! Now let's check who you are. Type 'whoami' to see your username.",
        expectedCommand: 'whoami',
        hint: "Type 'whoami' to see your current user",
      },
      {
        id: 'pwd',
        instruction: "Let's see where we are in the file system. Type 'pwd' to print your working directory.",
        expectedCommand: 'pwd',
        hint: "Type 'pwd' to see your current location",
      },
      {
        id: 'ls',
        instruction: "Now, let's see what's in this directory. Type 'ls' to list the contents.",
        expectedCommand: 'ls',
        hint: "Type 'ls' to list directory contents",
      },
      {
        id: 'mkdir',
        instruction: "Let's create a new directory. Type 'mkdir my_folder' to create a directory named 'my_folder'.",
        expectedCommand: 'mkdir my_folder',
        hint: "Type 'mkdir my_folder' to create a new directory",
      }
    ]
  },
  {
    id: 'cmd_challenges',
    title: 'Command Line Challenges',
    steps: [
      {
        id: 'cd_into_directory',
        instruction: "Get inside the 'thecmdchallenge/' directory.",
        expectedCommand: 'cd thecmdchallenge/',
        hint: "Use 'cd' followed by the directory name to move inside it."
      },
      {
        id: 'who_won_previous',
        instruction: "Who won the previous challenge? Each winner should explain what he/she did to the entire class each time.",
        expectedCommand: 'N/A',
        hint: "This is a discussion point, not a command."
      },
      {
        id: 'print_current_directory',
        instruction: "Print the current directory path.",
        expectedCommand: 'pwd',
        hint: "Type 'pwd' to see your current location."
      },
      {
        id: 'list_all_files',
        instruction: "List all files from the current directory, including hidden ones.",
        expectedCommand: 'ls -a',
        hint: "Use 'ls -a' to list all files, including hidden ones."
      },
      {
        id: 'list_files_recursively',
        instruction: "List all files inside the project, recursively (all files in the hierarchy).",
        expectedCommand: 'ls -R',
        hint: "Use 'ls -R' to list all files in all subdirectories."
      },
      {
        id: 'clear_terminal',
        instruction: "Clear all the clutter from the command line.",
        expectedCommand: 'clear',
        hint: "Type 'clear' to clean up the command line."
      },
      {
        id: 'navigate_small_name',
        instruction: "Go to the last level below the 'small-name' folder and show on the console the content of the 'trophy.txt' file.",
        expectedCommand: 'cd small-name/level1/level2/level3/level4/level5/level6 && cat trophy.txt',
        hint: "Navigate with 'cd' and use 'cat' to display file contents."
      },
      {
        id: 'move_to_funcode',
        instruction: "Move one level up, get to the 'funcode' directory, and list all files with the JavaScript typical extension.",
        expectedCommand: 'cd ../../../funcode && ls *.js',
        hint: "Use '..' to move up one level and 'ls *.js' to list JavaScript files."
      },
      {
        id: 'create_directory_funny',
        instruction: "Create a new directory inside 'funcode/the-most-funny/' called 'not-that-funny'.",
        expectedCommand: 'mkdir funcode/the-most-funny/not-that-funny',
        hint: "Use 'mkdir' followed by the directory path to create it."
      },
      {
        id: 'copy_boring_text',
        instruction: "Create a copy of 'the-mostboring-text.txt' (you can find it within '/boringfolder/'s children) and name it 'lol.txt'.",
        expectedCommand: 'cp boringfolder/child/the-mostboring-text.txt lol.txt',
        hint: "Use 'cp' to copy a file, specifying the source and target names."
      },
      {
        id: 'move_kids_image',
        instruction: "Move 'funcode/kids.jpg' inside 'funcode/images/hello/'.",
        expectedCommand: 'mv funcode/kids.jpg funcode/images/hello/',
        hint: "Use 'mv' to move the file to the target directory."
      },
      {
        id: 'remove_small_name',
        instruction: "Remove the 'small-name' directory.",
        expectedCommand: 'rm -r small-name',
        hint: "Use 'rm -r' to remove a directory and its contents."
      },
      {
        id: 'print_ultimate_joke',
        instruction: "Print in the command line the content of 'the-ultimate-joke.txt'.",
        expectedCommand: 'cat thecmdchallenge/the-ultimate-joke.txt',
        hint: "Use 'cat' to display the content of a file."
      },
      {
        id: 'remove_boringfolder_contents',
        instruction: "Remove all the contents from the 'boringfolder', they are extremely boring...",
        expectedCommand: 'rm -r boringfolder/*',
        hint: "Use 'rm -r' followed by 'folder/*' to remove all contents of a folder."
      },
      {
        id: 'open_vi_editor',
        instruction: "Open the file 'kamehameha/dragon-ball-jokes.md' using the VI command line text editor.",
        expectedCommand: 'vi kamehameha/dragon-ball-jokes.md',
        hint: "Use 'vi' followed by the filename to open it."
      },
      {
        id: 'edit_vi_file',
        instruction: "Update the file 'kamehameha/dragon-ball-jokes.md' by removing the first joke you read on the file, finally save and close the text editor.",
        expectedCommand: 'N/A',
        hint: "Press 'dd' to delete a line in VI, then ':wq' to save and quit."
      }
    ]
  }
];

export const checkCommand = (command, currentStep) => {
  if (!currentStep) return false;
  
  // If the step is a discussion point or non-command step (expectedCommand is 'N/A')
  if (currentStep.expectedCommand === 'N/A') {
    // Consider these steps as automatically completed when any input is provided
    return true;
  }
  
  // Clean up the command by trimming whitespace and handling multiple spaces
  const cleanCommand = command.trim().replace(/\s+/g, ' ').toLowerCase();
  const expectedCommand = currentStep.expectedCommand.toLowerCase();
  
  return cleanCommand === expectedCommand;
};
