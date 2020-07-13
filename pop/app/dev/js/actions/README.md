# Actions

Actions are events that happen
- most actions are user events (clicked a button, submitted a form, etc...)
- can also be other events such as an API call returning data

### Actions are (usually) made up of two parts


**type** - describes the action that occurred
```
ADD_USER_BUTTON_CLICKED
```


**payload** - *(optional)* any extra data that is needed
```
{
            id: 1,
            first: "BMI Chart",
            description: "A BMI Chart or Body Mass Index Chart can be a useful tool for visualizing the ranges for underweight, healthy weight, overweight, and obesity based on a person's height. The simplicity of the BMI formula has made it extremely popular as an initial diagnosing tool for determining a person's healthy body weight. The formula does have its shortcomings because it does not take into account age, frame size, gender, or muscularity.",
            thumbnail: "https://www.vertex42.com/ExcelTemplates/Images/bmi-chart.gif"
        },
```

## Actions vs. Action Creators

Action creators are functions that create objects, actions are the objects that get created (returned). You pass them as argument together with dispatch to the bindActionCreators in the matchDispatchToProps function. This function also receives dispatch as argument.

**Action creator**
```
export default function () {
    return {
        first: "BMI Chart",
            description: "A BMI Chart or Body Mass Index Chart can be a useful tool for visualizing the ranges for underweight, healthy weight, overweight, and obesity based on a person's height. The simplicity of the BMI formula has made it extremely popular as an initial diagnosing tool for determining a person's healthy body weight. The formula does have its shortcomings because it does not take into account age, frame size, gender, or muscularity.",
            thumbnail: "https://www.vertex42.com/ExcelTemplates/Images/bmi-chart.gif"
    }
}
```

**Action**
```
{
    first: "BMI Chart",
            description: "A BMI Chart or Body Mass Index Chart can be a useful tool for visualizing the ranges for underweight, healthy weight, overweight, and obesity based on a person's height. The simplicity of the BMI formula has made it extremely popular as an initial diagnosing tool for determining a person's healthy body weight. The formula does have its shortcomings because it does not take into account age, frame size, gender, or muscularity.",
            thumbnail: "https://www.vertex42.com/ExcelTemplates/Images/bmi-chart.gif"
}
```

## What happens next?

All actions are automatically sent to **all** reducers. It is the reducers job to determine how to handle that action: Take ACTION  or IGNORE
(can also just ignore it).
