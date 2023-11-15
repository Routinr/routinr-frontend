import React from 'react'
import DashboardLayout from '../layout/DashboardLayout';
import Topbar from './Topbar';
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { BsPlusCircle } from 'react-icons/bs';
import { useState } from 'react';
import NoteDetails from './NoteDetails';
import AddNote from './AddNote';

// css styling
import "../../css/App.css"

const Notes = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddNoteVisible, setIsAddNoteVisible] = useState(false);
  const handleAddNoteClick = () => {
    setIsAddNoteVisible(true);
  };

  const AddNoteClose = () => {
    setIsAddNoteVisible(false);
  };

  const data = [
    {
      id: 1,
      heading: "Funny Day At The Mall",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra vitae arcu est odio. Et velit blandit nunc orci viverra feugiat. Et vitae porttitor tristique ullamcorper posuere sodales eget. Amet quis laoreet egestas dolor vulputate eget. Sit gravida tristique odio sem. A adipiscing nibh vulputate in magna augue a aliquam. Aliquam dis pharetra libero aliquet diam aliquam ornare. Tristique tempus at cras aliquet id fames in felis. Nisi facilisis sit imperdiet nunc. Vehicula elit amet arcu id proin in. Magna iaculis neque nisl elit donec diam dolor placerat nulla. Libero aliquet ac neque sed eu. Sed enim vitae justo quam rutrum vitae eu cursus condimentum.Congue eget ultrices et at ipsum ultricies. Vitae porttitor eget risus sit convallis donec. Rhoncus quis cras neque gravida eget suscipit euismod velit diam. Libero laoreet aliquet sed nisl. In auctor arcu arcu arcu est neque pellentesque accumsan. Quis commodo rutrum nec viverra sed. Varius non vitae tempus erat feugiat egestas. Sit pulvinar id urna turpis dolor venenatis blandit gravida. In metus massa faucibus ac tincidunt varius vivamus.Commodo eget lorem sit malesuada hendrerit morbi quis. Convallis rhoncus ornare amet ac. Sagittis venenatis nisl rhoncus morbi. Gravida nec tincidunt consectetur facilisis. Faucibus ipsum cras pharetra morbi lectus magna nulla feugiat. Mauris cursus turpis vulputate tincidunt. Dignissim lectus sed turpis lorem. Habitasse dolor tristique feugiat nisl tortor in tincidunt facilisis quam. Quis nulla egestas lectus aliquam sociis adipiscing mauris. Magna est amet mauris sagittis dignissim mollis ultrices. Tincidunt dui dui mattis fringilla. Adipiscing pretium non viverra feugiat varius vel rutrum quam. Pellentesque fermentum dictumst est auctor porttitor vitae bibendum.Vitae adipiscing feugiat tincidunt etiam phasellus. A nisl netus turpis eleifend in suspendisse dignissim odio. Feugiat sed sit facilisis semper amet et tristique turpis. Arcu ultrices nulla urna .",
    },
    {
      id: 2,
      heading: "Bucket List For New Year",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra vitae arcu est odio. Et velit blandit nunc orci viverra feugiat. Et vitae porttitor tristique ullamcorper posuere sodales eget. Amet quis laoreet egestas dolor vulputate eget. Sit gravida tristique odio sem. A adipiscing nibh vulputate in magna augue a aliquam. Aliquam dis pharetra libero aliquet diam aliquam ornare. Tristique tempus at cras aliquet id fames in felis. Nisi facilisis sit imperdiet nunc. Vehicula elit amet arcu id proin in. Magna iaculis neque nisl elit donec diam dolor placerat nulla. Libero aliquet ac neque sed eu. Sed enim vitae justo quam rutrum vitae eu cursus condimentum.Congue eget ultrices et at ipsum ultricies. Vitae porttitor eget risus sit convallis donec. Rhoncus quis cras neque gravida eget suscipit euismod velit diam. Libero laoreet aliquet sed nisl. In auctor arcu arcu arcu est neque pellentesque accumsan. Quis commodo rutrum nec viverra sed. Varius non vitae tempus erat feugiat egestas. Sit pulvinar id urna turpis dolor venenatis blandit gravida. In metus massa faucibus ac tincidunt varius vivamus.Commodo eget lorem sit malesuada hendrerit morbi quis. Convallis rhoncus ornare amet ac. Sagittis venenatis nisl rhoncus morbi. Gravida nec tincidunt consectetur facilisis. Faucibus ipsum cras pharetra morbi lectus magna nulla feugiat. Mauris cursus turpis vulputate tincidunt. Dignissim lectus sed turpis lorem. Habitasse dolor tristique feugiat nisl tortor in tincidunt facilisis quam. Quis nulla egestas lectus aliquam sociis adipiscing mauris. Magna est amet mauris sagittis dignissim mollis ultrices. Tincidunt dui dui mattis fringilla. Adipiscing pretium non viverra feugiat varius vel rutrum quam. Pellentesque fermentum dictumst est auctor porttitor vitae bibendum.Vitae adipiscing feugiat tincidunt etiam phasellus. A nisl netus turpis eleifend in suspendisse dignissim odio. Feugiat sed sit facilisis semper amet et tristique turpis. Arcu ultrices nulla urna .",
    },
    {
      id: 3,
      heading: "Birthday Wishlist",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sapien est adipiscing odio ullamcorper faucibus aliquam. Hac urna nibh mi vitae",
    },
    {
      id: 4,
      heading: "1st Day At Therapy",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra vitae arcu est odio. Et velit blandit nunc orci viverra feugiat. Et vitae porttitor tristique ullamcorper posuere sodales eget. Amet quis laoreet egestas dolor vulputate eget. Sit gravida tristique odio sem. A adipiscing nibh vulputate in magna augue a aliquam. Aliquam dis pharetra libero aliquet diam aliquam ornare. Tristique tempus at cras aliquet id fames in felis. Nisi facilisis sit imperdiet nunc. Vehicula elit amet arcu id proin in. Magna iaculis neque nisl elit donec diam dolor placerat nulla. Libero aliquet ac neque sed eu. Sed enim vitae justo quam rutrum vitae eu cursus condimentum.Congue eget ultrices et at ipsum ultricies. Vitae porttitor eget risus sit convallis donec. Rhoncus quis cras neque gravida eget suscipit euismod velit diam. Libero laoreet aliquet sed nisl. In auctor arcu arcu arcu est neque pellentesque accumsan. Quis commodo rutrum nec viverra sed. Varius non vitae tempus erat feugiat egestas. Sit pulvinar id urna turpis dolor venenatis blandit gravida. In metus massa faucibus ac tincidunt varius vivamus.Commodo eget lorem sit malesuada hendrerit morbi quis. Convallis rhoncus ornare amet ac. Sagittis venenatis nisl rhoncus morbi. Gravida nec tincidunt consectetur facilisis. Faucibus ipsum cras pharetra morbi lectus magna nulla feugiat. Mauris cursus turpis vulputate tincidunt. Dignissim lectus sed turpis lorem. Habitasse dolor tristique feugiat nisl tortor in tincidunt facilisis quam. Quis nulla egestas lectus aliquam sociis adipiscing mauris. Magna est amet mauris sagittis dignissim mollis ultrices. Tincidunt dui dui mattis fringilla. Adipiscing pretium non viverra feugiat varius vel rutrum quam. Pellentesque fermentum dictumst est auctor porttitor vitae bibendum.Vitae adipiscing feugiat tincidunt etiam phasellus. A nisl netus turpis eleifend in suspendisse dignissim odio. Feugiat sed sit facilisis semper amet et tristique turpis. Arcu ultrices nulla urna .",
    },
    {
      id: 5,
      heading: "Date With Yarden",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra vitae arcu est odio. Et velit blandit nunc orci viverra feugiat. Et vitae porttitor tristique ullamcorper posuere sodales eget. Amet quis laoreet egestas dolor vulputate eget. Sit gravida tristique odio sem. A adipiscing nibh vulputate in magna augue a aliquam. Aliquam dis pharetra libero aliquet diam aliquam ornare. Tristique tempus at cras aliquet id fames in felis. Nisi facilisis sit imperdiet nunc. Vehicula elit amet arcu id proin in. Magna iaculis neque nisl elit donec diam dolor placerat nulla. Libero aliquet ac neque sed eu. Sed enim vitae justo quam rutrum vitae eu cursus condimentum.Congue eget ultrices et at ipsum ultricies. Vitae porttitor eget risus sit convallis donec. Rhoncus quis cras neque gravida eget suscipit euismod velit diam. Libero laoreet aliquet sed nisl. In auctor arcu arcu arcu est neque pellentesque accumsan. Quis commodo rutrum nec viverra sed. Varius non vitae tempus erat feugiat egestas. Sit pulvinar id urna turpis dolor venenatis blandit gravida. In metus massa faucibus ac tincidunt varius vivamus.Commodo eget lorem sit malesuada hendrerit morbi quis. Convallis rhoncus ornare amet ac. Sagittis venenatis nisl rhoncus morbi. Gravida nec tincidunt consectetur facilisis. Faucibus ipsum cras pharetra morbi lectus magna nulla feugiat. Mauris cursus turpis vulputate tincidunt. Dignissim lectus sed turpis lorem. Habitasse dolor tristique feugiat nisl tortor in tincidunt facilisis quam. Quis nulla egestas lectus aliquam sociis adipiscing mauris. Magna est amet mauris sagittis dignissim mollis ultrices. Tincidunt dui dui mattis fringilla. Adipiscing pretium non viverra feugiat varius vel rutrum quam. Pellentesque fermentum dictumst est auctor porttitor vitae bibendum.Vitae adipiscing feugiat tincidunt etiam phasellus. A nisl netus turpis eleifend in suspendisse dignissim odio. Feugiat sed sit facilisis semper amet et tristique turpis. Arcu ultrices nulla urna .",
    },
    {
      id: 6,
      heading: "Terax’s vet. Appointment",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra vitae arcu est odio. Et velit blandit nunc orci viverra feugiat. Et vitae porttitor tristique ullamcorper posuere sodales eget. Amet quis laoreet egestas dolor vulputate eget. Sit gravida tristique odio sem. A adipiscing nibh vulputate in magna augue a aliquam. Aliquam dis pharetra libero aliquet diam aliquam ornare. Tristique tempus at cras aliquet id fames in felis. Nisi facilisis sit imperdiet nunc. Vehicula elit amet arcu id proin in. Magna iaculis neque nisl elit donec diam dolor placerat nulla. Libero aliquet ac neque sed eu. Sed enim vitae justo quam rutrum vitae eu cursus condimentum.Congue eget ultrices et at ipsum ultricies. Vitae porttitor eget risus sit convallis donec. Rhoncus quis cras neque gravida eget suscipit euismod velit diam. Libero laoreet aliquet sed nisl. In auctor arcu arcu arcu est neque pellentesque accumsan. Quis commodo rutrum nec viverra sed. Varius non vitae tempus erat feugiat egestas. Sit pulvinar id urna turpis dolor venenatis blandit gravida. In metus massa faucibus ac tincidunt varius vivamus.Commodo eget lorem sit malesuada hendrerit morbi quis. Convallis rhoncus ornare amet ac. Sagittis venenatis nisl rhoncus morbi. Gravida nec tincidunt consectetur facilisis. Faucibus ipsum cras pharetra morbi lectus magna nulla feugiat. Mauris cursus turpis vulputate tincidunt. Dignissim lectus sed turpis lorem. Habitasse dolor tristique feugiat nisl tortor in tincidunt facilisis quam. Quis nulla egestas lectus aliquam sociis adipiscing mauris. Magna est amet mauris sagittis dignissim mollis ultrices. Tincidunt dui dui mattis fringilla. Adipiscing pretium non viverra feugiat varius vel rutrum quam. Pellentesque fermentum dictumst est auctor porttitor vitae bibendum.Vitae adipiscing feugiat tincidunt etiam phasellus. A nisl netus turpis eleifend in suspendisse dignissim odio. Feugiat sed sit facilisis semper amet et tristique turpis. Arcu ultrices nulla urna .",
    },
  ];

  const handleNoteClick = (id) => {
    setSelectedNote(id);
  };
   const handleBackClick = () => {
     setSelectedNote(null);
   };

   const filteredData = data.filter((item) => {
     const headingLowerCase = item.heading.toLowerCase();
     const descriptionLowerCase = item.description.toLowerCase();
     const searchTermLowerCase = searchTerm.toLowerCase();

     return (
       headingLowerCase.includes(searchTermLowerCase) ||
       descriptionLowerCase.includes(searchTermLowerCase)
     );
   });

   const truncateDescription = (description, maxLength) => {
     // Get the first `maxLength` words of the description
     const truncatedWords = description
       .split(" ")
       .slice(0, maxLength)
       .join(" ");

     // Add ellipsis if the description is truncated
     return description.length > truncatedWords.length
       ? `${truncatedWords} ...`
       : truncatedWords;
   };

  return (
    <DashboardLayout>
      <div className="dashboard-cont md:h-[200vh] lg:h-[120vh] xl:h-[200vh] md:bg-white md:shadow-2xl md:rounded-2xl md:bg-opacity-5 w-full md:w-[80%] md:p-5 border-[0px] md:border-[1px] border-white border-opacity-10 z-20 overflow-scroll">
        <div className="hidden md:block">
          <Topbar />
        </div>
        <div className="flex justify-between">
          <div className="text-white text-lg font-bold mt-2">
            Notes Are Reminders,
            <br /> Check Them Out.
          </div>
          <div>
            <div>
              <h1 className="text-[#56CFE1] text-[13px]">New Notes</h1>
              <div
                className="w-[80px] h-[40px] md:w-[100px] md:h-[40px] border-[1px] border-[#56CFE1] border-dashed flex justify-center items-center cursor-pointer md:mt-2"
                onClick={handleAddNoteClick}
              >
                <BsPlusCircle className="text-[#56CFE1]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 w-full rounded-md mt-10">
          <div>
            <AiOutlineSearch className="text-white text-[25px]" />
          </div>
          <input
            className="w-full bg-transparent text-white p-3 border-[1px] border-white rounded-md"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Notes"
          />
        </div>
        <div className="flex flex-wrap px-7 md:gap-5 justify-between text-white mt-20 ">
          {filteredData.map((item) => (
            <div
              className={`border-[1px] border-white p-4 mb-3 w-[150px] sm:w-[300px] lg:w-[200px] rounded-md cursor-pointer ${
                selectedNote === item.id ? "bg-gray-500" : ""
              }`}
              key={item.id}
              onClick={() => handleNoteClick(item.id)}
            >
              <h2 className="text-[14px] font-bold mb-[10px] md:text-[18px]">{item.heading}</h2>
              <p className="text-[13px] md:text-[15px] ">
                {selectedNote === item.id
                  ? item.description // Show full description if selected
                  : truncateDescription(item.description, 10)}
              </p>
            </div>
          ))}
        </div>
        {selectedNote && (
          <NoteDetails
            note={data.find((item) => item.id === selectedNote)}
            onClose={handleBackClick}
          />
        )}
        {isAddNoteVisible && <AddNote onClose={AddNoteClose} />}
      </div>
    </DashboardLayout>
  );
}

export default Notes