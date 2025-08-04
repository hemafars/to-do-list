// Selecting UI elements using their IDs
// اختيار عناصر واجهة المستخدم باستخدام المعرفات
let add = document.getElementById( "add" ) // Get the add button by ID / الحصول على زر الإضافة باستخدام ID
let textBox = document.getElementById( "textBox" ) // Get the text input field / الحصول على حقل إدخال النص
let displayTasks = document.getElementById( "displayTasks" ) // Get the tasks display area / الحصول على منطقة عرض المهام
let delet = document.getElementById( "delet" ) // Get delete button (Note: unused in code) / الحصول على زر الحذف (غير مستخدم)
let edet = document.getElementById( "edet" ) // Get edit button (Note: unused in code) / الحصول على زر التعديل (غير مستخدم)
let end = document.getElementById( "end" ) // Get complete button (Note: unused in code) / الحصول على زر الإنهاء (غير مستخدم)

// Array to store task objects
// مصفوفة لتخزين كائنات المهام
let tasktoarray = [] // Create empty array to store tasks / إنشاء مصفوفة فارغة لتخزين المهام

// Add click event to the add button
// تعريف حدث النقر على زر الإضافة
add.onclick = function ()
{
    // Check if text field is not empty
    // التحقق من أن حقل النص ليس فارغاً
    if ( textBox.value !== "" )
    {
        // If not empty, add task to array
        // إذا لم يكن فارغاً، نضيف المهمة إلى المصفوفة
        addTaskToArray( textBox.value )
        // Print confirmation to console
        // طباعة تأكيد في الكونسول
        console.log( "تمت الاضافة / Task added" )
        // Clear input field after adding
        // تفريغ حقل الإدخال بعد الإضافة
        textBox.value = ''
    }
}

// Function to add new task to array
// دالة لإضافة مهمة جديدة إلى المصفوفة
function addTaskToArray( tasktext )
{
    // Create task object
    // إنشاء كائن يمثل المهمة
    const task = {
        id: Date.now(), // Create unique ID using timestamp / إنشاء ID فريد باستخدام الطابع الزمني
        title: tasktext, // Task text from input / نص المهمة المدخل
        completed: false // Default task status (incomplete) / حالة المهمة (غير مكتملة افتراضياً)
    }
    // Add task to end of array
    // إضافة المهمة إلى نهاية المصفوفة
    tasktoarray.push( task );
    // Display all tasks on page
    // عرض جميع المهام على الصفحة
    addTasksToPageFrom( tasktoarray )
    // Print added task to console
    // طباعة المهمة المضافة في الكونسول
    console.log( task )
}

// Function to display tasks on page
// دالة لعرض المهام في الصفحة
function addTasksToPageFrom( tasktoarray )
{
    // Clear current display area content
    // مسح محتوى منطقة العرض أولاً
    displayTasks.innerHTML = '';

    // Process each task in array
    // معالجة كل مهمة في المصفوفة
    tasktoarray.forEach( task =>
    {
        // Create UI elements
        // إنشاء عناصر DOM للواجهة
        let divModalMialog = document.createElement( "div" ) // Main container / الحاوية الرئيسية
        let divModalContent = document.createElement( "div" ) // Modal content / محتوى المودال
        let divModalBody = document.createElement( "div" ) // Modal body / جسم المودال
        let myH3 = document.createElement( "h3" ) // Task title / عنوان المهمة
        let mytext = document.createTextNode( task.title ) // Task text / نص المهمة
        let diVmodalFooter = document.createElement( "div" ) // Modal footer / تذييل المودال
        let btnDanger = document.createElement( "button" ) // Delete button / زر الحذف
        let btnPrimary = document.createElement( "button" ) // Edit button / زر التعديل
        let btnSuccess = document.createElement( "button" ) // Complete button / زر الإنهاء

        // Add styling classes (Bootstrap)
        // إضافة كلاسات التنسيق
        divModalMialog.className = "modal-dialog" // Modal dialog styling / تنسيق حاوية المودال
        divModalContent.className = "modal-content" // Modal content styling / تنسيق محتوى المودال
        divModalBody.className = "modal-body" // Modal body styling / تنسيق جسم المودال
        diVmodalFooter.className = "modal-footer" // Modal footer styling / تنسيق تذييل المودال
        btnDanger.className = "btn btn-danger" // Red danger button (delete) / تنسيق زر الحذف (لون أحمر)
        btnPrimary.className = "btn btn-primary" // Blue primary button (edit) / تنسيق زر التعديل (لون أزرق)
        btnSuccess.className = "btn btn-success" // Green success button (complete) / تنسيق زر الإنهاء (لون أخضر)

        if ( task.completed )
        {
            divModalMialog.className = "modal-dialog text-decoration-line-through"
        }
        // Build DOM structure
        // بناء هيكل DOM
        myH3.appendChild( mytext ) // Add text to h3 / إضافة نص المهمة إلى عنصر h3
        divModalBody.appendChild( myH3 ) // Add h3 to modal body / إضافة h3 إلى جسم المودال
        divModalContent.appendChild( divModalBody ) // Add body to content / إضافة الجسم إلى المحتوى
        divModalMialog.appendChild( divModalContent ) // Add content to container / إضافة المحتوى إلى الحاوية
        divModalContent.appendChild( diVmodalFooter ) // Add footer to content / إضافة التذييل إلى المحتوى

        // Set up buttons
        // إعداد الأزرار
        diVmodalFooter.appendChild( btnDanger ) // Add delete button to footer / إضافة زر الحذف إلى التذييل
        btnDanger.innerText = "حذف / Delete" // Delete button text / نص زر الحذف
        diVmodalFooter.appendChild( btnPrimary ) // Add edit button to footer / إضافة زر التعديل إلى التذييل
        btnPrimary.innerText = "تعديل / Edit" // Edit button text / نص زر التعديل
        diVmodalFooter.appendChild( btnSuccess ) // Add complete button to footer / إضافة زر الإنهاء إلى التذييل
        btnSuccess.innerText = "انهاء / Complete" // Complete button text / نص زر الإنهاء

        // Additional styling
        // تنسيق إضافي
        divModalMialog.style.width = "80%" // Set container width / تحديد عرض الحاوية

        // Add modal to main display area
        // إضافة المودال إلى منطقة العرض الرئيسية
        displayTasks.appendChild( divModalMialog )

        // Print element to console for debugging
        // طباعة العنصر في الكونسول لأغراض التصحيح
        console.log( divModalMialog )
    } );
}

