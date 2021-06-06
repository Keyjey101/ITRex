const fn2 = (maze) => {
  const findEnter = (maze) => {
    const row = maze.length;
    const column = maze[0].length;

    let positionY;

    maze.forEach((row, id) => {
      if (row.includes("0")) {
        positionY = id;
      }
    });

    const positionX = maze[positionY].indexOf("0");

    return [positionY, positionX];
  };

  const start = findEnter(maze);

  const findExit = (maze) => {
    let positionX;
    let positionY;

    if (maze[0].includes("+")) {
      positionY = 0;
      positionX = maze[0].indexOf("+");
    }
    if (maze[maze.length - 1].includes("+")) {
      positionY = maze.length - 1;
      positionX = maze[maze.length - 1].indexOf("+");
    } else {
      maze.forEach((row, id) => {
        if (row[0] === "+") {
          positionY = id;
          positionX = 0;
        } else if (row[row.length - 1] === "+") {
          positionY = id;
          positionX = row.length - 1;
        }
      });
    }

    const newMaze = maze;
    newMaze[positionY][positionX] = "Goal";
    newMaze[start[0]][start[1]] = "Start";

    return newMaze;
  };

  const newMaze = findExit(maze);

  
  var findShortestPath = function (startCoordinates, grid) {
    var distanceFromTop = startCoordinates[0];
    var distanceFromLeft = startCoordinates[1];

    var location = {
      distanceFromTop: distanceFromTop,
      distanceFromLeft: distanceFromLeft,
      path: [],
      status: "Start",
    };
//fifo
    var queue = [location];

    while (queue.length > 0) {
      var currentLocation = queue.shift();

      // Go top
      var newLocation = exploreInDirection(currentLocation, "top", grid);
      if (newLocation.status === "Goal") {
        return newLocation.path;
      } else if (newLocation.status === "Valid") {
        queue.push(newLocation);
      }

      // Go rigth
      var newLocation = exploreInDirection(currentLocation, "right", grid);
      if (newLocation.status === "Goal") {
        return newLocation.path;
      } else if (newLocation.status === "Valid") {
        queue.push(newLocation);
      }

      // Go bottom
      var newLocation = exploreInDirection(currentLocation, "bottom", grid);
      if (newLocation.status === "Goal") {
        return newLocation.path;
      } else if (newLocation.status === "Valid") {
        queue.push(newLocation);
      }

      // Go left
      var newLocation = exploreInDirection(currentLocation, "left", grid);
      if (newLocation.status === "Goal") {
        return newLocation.path;
      } else if (newLocation.status === "Valid") {
        queue.push(newLocation);
      }
    }

    // No valid path found
    return false;
  };

  // Checker
  var locationStatus = function (location, grid) {
    var gridSize = grid.length;
    var dft = location.distanceFromTop;
    var dfl = location.distanceFromLeft;

    if (
      location.distanceFromLeft < 0 ||
      location.distanceFromLeft >= grid[0].length ||
      location.distanceFromTop < 0 ||
      location.distanceFromTop >= gridSize
    ) {
      // location is not on the grid--return false
      return "Invalid";
    } else if (grid[dft][dfl] === "Goal") {
      return "Goal";
    } else if (grid[dft][dfl] !== "+") {
      // location is either an obstacle or has been visited
      return "Blocked";
    } else {
      return "Valid";
    }
  };

  // Explores the grid from the given location in the given
  // direction
  var exploreInDirection = function (currentLocation, direction, grid) {
    var newPath = currentLocation.path.slice();
    newPath.push(direction);

    var dft = currentLocation.distanceFromTop;
    var dfl = currentLocation.distanceFromLeft;

    if (direction === "top") {
      dft -= 1;
    } else if (direction === "right") {
      dfl += 1;
    } else if (direction === "bottom") {
      dft += 1;
    } else if (direction === "left") {
      dfl -= 1;
    }

    var newLocation = {
      distanceFromTop: dft,
      distanceFromLeft: dfl,
      path: newPath,
      status: "Unknown",
    };
    newLocation.status = locationStatus(newLocation, grid);

    // If this new location is valid, mark it as 'Visited'
    if (newLocation.status === "Valid") {
      grid[newLocation.distanceFromTop][newLocation.distanceFromLeft] =
        "Visited";
    }

    return newLocation;
  };

  return findShortestPath(start, newMaze);
};

module.exports = fn2;
