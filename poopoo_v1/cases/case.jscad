function case_extrude_1_3_outline_fn(){
    return new CSG.Path2D([[-10.5,8.5],[10.5,8.5]]).appendPoint([27.5,-1.5]).appendPoint([65.5,-1.5]).appendPoint([65.5,-5.1]).appendPoint([107.5,-5.1]).appendPoint([107.5,58.4]).appendPoint([86.5,58.4]).appendPoint([86.5,72.9]).appendPoint([67.5,72.9]).appendPoint([67.5,76.5]).appendPoint([8.5,76.5]).appendPoint([8.5,67.5]).appendPoint([-10.5,67.5]).appendPoint([-10.5,8.5]).close().innerToCAG()
.extrude({ offset: [0, 0, 1.3] });
}


function supports_extrude_4_1_outline_fn(){
    return new CSG.Path2D([[69,-5.1],[83,-5.1]]).appendPoint([83,-3.1]).appendPoint([69,-3.1]).appendPoint([69,-5.1]).close().innerToCAG()
.union(
    new CSG.Path2D([[50,-1.5],[64,-1.5]]).appendPoint([64,0.5]).appendPoint([50,0.5]).appendPoint([50,-1.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,-1.5],[45,-1.5]]).appendPoint([45,0.5]).appendPoint([31,0.5]).appendPoint([31,-1.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,17.5],[26,17.5]]).appendPoint([26,19.5]).appendPoint([12,19.5]).appendPoint([12,17.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,8.5],[7,8.5]]).appendPoint([7,10.5]).appendPoint([-7,10.5]).appendPoint([-7,8.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,70.9],[83,70.9]]).appendPoint([83,72.9]).appendPoint([69,72.9]).appendPoint([69,70.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,51.9],[83,51.9]]).appendPoint([83,53.9]).appendPoint([69,53.9]).appendPoint([69,51.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,32.9],[83,32.9]]).appendPoint([83,34.9]).appendPoint([69,34.9]).appendPoint([69,32.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,13.9],[83,13.9]]).appendPoint([83,15.9]).appendPoint([69,15.9]).appendPoint([69,13.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,74.5],[64,74.5]]).appendPoint([64,76.5]).appendPoint([50,76.5]).appendPoint([50,74.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,55.5],[64,55.5]]).appendPoint([64,57.5]).appendPoint([50,57.5]).appendPoint([50,55.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,36.5],[64,36.5]]).appendPoint([64,38.5]).appendPoint([50,38.5]).appendPoint([50,36.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,17.5],[64,17.5]]).appendPoint([64,19.5]).appendPoint([50,19.5]).appendPoint([50,17.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,74.5],[45,74.5]]).appendPoint([45,76.5]).appendPoint([31,76.5]).appendPoint([31,74.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,55.5],[45,55.5]]).appendPoint([45,57.5]).appendPoint([31,57.5]).appendPoint([31,55.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,36.5],[45,36.5]]).appendPoint([45,38.5]).appendPoint([31,38.5]).appendPoint([31,36.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,17.5],[45,17.5]]).appendPoint([45,19.5]).appendPoint([31,19.5]).appendPoint([31,17.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,74.5],[26,74.5]]).appendPoint([26,76.5]).appendPoint([12,76.5]).appendPoint([12,74.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,55.5],[26,55.5]]).appendPoint([26,57.5]).appendPoint([12,57.5]).appendPoint([12,55.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,36.5],[26,36.5]]).appendPoint([26,38.5]).appendPoint([12,38.5]).appendPoint([12,36.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,65.5],[7,65.5]]).appendPoint([7,67.5]).appendPoint([-7,67.5]).appendPoint([-7,65.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,46.5],[7,46.5]]).appendPoint([7,48.5]).appendPoint([-7,48.5]).appendPoint([-7,46.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,27.5],[7,27.5]]).appendPoint([7,29.5]).appendPoint([-7,29.5]).appendPoint([-7,27.5]).close().innerToCAG()
).extrude({ offset: [0, 0, 4.1] });
}




                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = case_extrude_1_3_outline_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = supports_extrude_4_1_outline_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.union(case__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        