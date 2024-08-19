# search-filter
React code to build a simple search filter functionality to display a filtered list based on the search query entered by the user


The provided project is a simple React application that implements a search filter functionality. The goal is to display a filtered list of items based on the search query entered by the user. Here's a breakdown of the code and its functionality:

# React Component Breakdown
## State Management:

search state is used to store the current value of the search input.

The setSearchTerm function updates this state when the input value changes.

## Input Field:

An HTML <input> element allows users to type in their search query.

The onChange event handler updates the search state with the input value.

## Filtering Logic:

The JSONDATA array (imported from MOCK_DATA.json) is filtered based on the search value.

The filter method checks if the first_name property of each object includes the search term (case-insensitive).

If the search value is empty, all items are returned.

## Rendering Filtered Results:

After filtering, the map method is used to iterate over the filtered results and render them.

Each result is displayed within a <div> element.

# CSS Styling

## Container:

.App class styles the main container, centering content both horizontally and vertically and using a column layout.

The font is set to Arial or a similar sans-serif font.

## Input Field:

.App input styles the search input field with margin, width, height, font size, and padding.

## Paragraph Text:

p element styling adjusts margins and font size for better readability.
