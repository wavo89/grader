export default function JokesNew() {
   return (
      <div>
         <p>Add joke</p>
         <form method="post" />
         <div>
            <label>
               Name: <input type="text" name="name" />
            </label>
         </div>
         <div>
            <label>
               Content: <textarea name="content" />
            </label>
         </div>
         <div>
            <button type="submit" className="button">
               Add
            </button>
         </div>
      </div>
   );
}
